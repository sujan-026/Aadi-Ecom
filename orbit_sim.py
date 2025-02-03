import pygame
import math

# Initialize Pygame
pygame.init()
WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("3 Bodies Orbiting a Blue Star")
clock = pygame.time.Clock()
font = pygame.font.SysFont("Arial", 20)

# ---------------- Simulation Parameters ----------------
# In our simulation we use “simulation units.”
# We set the gravitational constant to G = 1, and choose masses and distances
# so that the orbits are approximately circular.
G = 1.0

# The star is very massive compared to the orbiting bodies.
STAR_MASS = 10000

# Time step: We use a base dt that is multiplied by the speed factor.
base_dt = 0.1
speed_factor = 1.0  # can be increased/decreased with UP/DOWN keys

# A small softening factor avoids division by zero when bodies come very close.
softening = 0.1

# ---------------- Coordinate Convention ----------------
# We use a “simulation coordinate system” in which the blue star is at (0,0)
# and positive y is upward (as in usual math). Before drawing, we convert to
# screen coordinates by adding an offset and flipping the y-axis:
def sim_to_screen(pos):
    """Convert simulation coordinates to screen coordinates.
    In simulation, (0,0) is the star at the center and y is upward.
    In screen coordinates, (WIDTH/2, HEIGHT/2) is the center and y increases downward.
    """
    return int(WIDTH // 2 + pos.x), int(HEIGHT // 2 - pos.y)

# ---------------- Define a Body Class ----------------
class Body:
    def __init__(self, mass, pos, vel, color, radius, fixed=False):
        self.mass = mass
        self.pos = pygame.math.Vector2(pos)
        self.vel = pygame.math.Vector2(vel)
        self.color = color
        self.radius = radius
        self.fixed = fixed  # if fixed, the body will not move (e.g. the central star)

# ---------------- Create Our Bodies ----------------
# The blue star (fixed at the origin)
star = Body(STAR_MASS, (0, 0), (0, 0), (0, 0, 255), 20, fixed=True)

# To get circular orbits, we use v = sqrt(G * M / r)
# Planet 1: Placed to the right of the star.
r1 = 150
v1 = math.sqrt(STAR_MASS / r1)
# For a counterclockwise orbit in math coordinates:
# At position (r, 0), the tangent vector is (0, 1)
planet1 = Body(1, (r1, 0), (0, v1), (255, 0, 0), 5)

# Planet 2: Placed above the star.
r2 = 250
v2 = math.sqrt(STAR_MASS / r2)
# At position (0, r), the counterclockwise tangent is (-1, 0)
planet2 = Body(1, (0, r2), (-v2, 0), (0, 255, 0), 5)

# Planet 3: Placed to the left of the star.
r3 = 350
v3 = math.sqrt(STAR_MASS / r3)
# At position (-r, 0), the counterclockwise tangent is (0, -1)
planet3 = Body(1, (-r3, 0), (0, -v3), (255, 255, 255), 5)

# List of all bodies
bodies = [star, planet1, planet2, planet3]

# ---------------- Simulation Loop ----------------
running = True
while running:
    # --- Event handling (speed control) ---
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.KEYDOWN:
            # Increase simulation speed
            if event.key == pygame.K_UP:
                speed_factor *= 1.1
            # Decrease simulation speed
            elif event.key == pygame.K_DOWN:
                speed_factor /= 1.1

    # Effective time step for this frame.
    dt = base_dt * speed_factor

    # --- Compute gravitational accelerations ---
    # For each body (except fixed ones) compute the net gravitational acceleration
    # from all the other bodies.
    accelerations = []
    for body in bodies:
        if body.fixed:
            accelerations.append(pygame.math.Vector2(0, 0))
            continue
        acc = pygame.math.Vector2(0, 0)
        for other in bodies:
            if other is body:
                continue
            r_vec = other.pos - body.pos
            # Add softening to avoid very high forces at small distances.
            dist_sqr = r_vec.length_squared() + softening ** 2
            # If the two bodies are (nearly) at the same spot, skip force calculation.
            if r_vec.length() != 0:
                force_dir = r_vec.normalize()
            else:
                force_dir = pygame.math.Vector2(0, 0)
            # Acceleration contribution from the other body: a = G * other.mass / r^2
            acc += G * other.mass / dist_sqr * force_dir
        accelerations.append(acc)

    # --- Update velocities and positions for bodies that move ---
    for i, body in enumerate(bodies):
        if not body.fixed:
            body.vel += accelerations[i] * dt
            body.pos += body.vel * dt

    # --- Drawing ---
    screen.fill((0, 0, 0))  # Black background
    for body in bodies:
        screen_pos = sim_to_screen(body.pos)
        pygame.draw.circle(screen, body.color, screen_pos, body.radius)

    # Display the current simulation speed factor.
    speed_text = font.render(f"Simulation Speed Factor: {speed_factor:.2f}", True, (255, 255, 255))
    screen.blit(speed_text, (10, 10))

    pygame.display.flip()
    clock.tick(60)  # Aim for 60 frames per second

pygame.quit()
