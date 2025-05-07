import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              IlyasBikarnaf
            </Link>
          </div>

          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} Ilyas Bikarnaf. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
