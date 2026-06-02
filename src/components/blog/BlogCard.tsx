import Image from "next/image";
import type { BlogPostPreview } from "@/lib/constants/blog";
import { Card } from "@/components/ui/Card";
import { assetPath } from "@/lib/utils/asset-path";
import { cn } from "@/lib/utils/cn";

export function BlogCard({ post }: { post: BlogPostPreview }) {
  return (
    <Card className="flex h-full flex-col overflow-hidden !p-0">
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={assetPath(post.image)}
          alt=""
          fill
          className={cn(
            "object-cover",
            post.id === "parents-guide" && "object-[65%_center]",
            post.id === "which-test" && "object-[center_35%]",
            post.id === "balanced-shortlist" && "object-[center_30%]",
          )}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col !p-5 md:!p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-cyan">{post.category}</p>
        <h2 className="mt-3 min-w-0 font-display text-lg font-bold leading-snug text-navy md:text-xl">
          {post.title}
        </h2>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{post.description}</p>
        <span
          className={cn(
            "mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-muted/60",
            "cursor-not-allowed",
          )}
          aria-disabled="true"
        >
          Coming soon
          <span aria-hidden>→</span>
        </span>
      </div>
    </Card>
  );
}
