import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function ProjectImageBox({ src, alt }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className="block w-full">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-muted">
            <Image
              src={src}
              alt={alt}
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            />
          </div>
        </button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="max-w-none! w-11/12 h-3/5 md:h-9/10"
      >
        <div className="relative w-full mx-auto overflow-hidden rounded-2xl bg-muted">
          <Image
            src={src}
            alt={alt}
            className="object-cover"
            fill
            sizes="(min-width: 1536px) 70vw, (min-width: 1280px) 80vw, 95vw"
          />
        </div>

        {/* i set header , title and description to prevent console errors and improve accessibility */}
        <DialogHeader className="hidden">
          <DialogTitle>{alt}</DialogTitle>
        </DialogHeader>
        <DialogDescription className="hidden">{alt}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
