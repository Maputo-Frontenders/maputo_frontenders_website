import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

const tagColors = ["bg-mf-secondProposal", "bg-mf-orange", "bg-mf-pink"];

export function ColorizedTags({ tags }: { tags: string[] }) {
  return tags.map((tag, index) => (
    <Badge
      key={tag}
      className={cn(tagColors[index % tagColors.length], "text-mf-dark")}
    >
      {tag.charAt(0).toUpperCase() + tag.slice(1)}
    </Badge>
  ));
}
