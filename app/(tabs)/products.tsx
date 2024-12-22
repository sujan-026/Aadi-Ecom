import spares from "@/assets/spares.json";
import SpareParts from "@/components/SpareParts";

export default function ProductScreen() {
  return <SpareParts spares={spares} numColumns={2} />;
}
