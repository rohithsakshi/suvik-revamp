import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-white block mb-4">
              SUVIK<span className="text-accent">.</span>
            </Link>
            <p className="text-white/60 max-w-sm">
              Delivering cutting-edge enterprise solutions, blockchain innovation, and strategic business setup across the UAE and beyond.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-white/60 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-white/60 hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-white/60">
              <li>info@suvik.ae</li>
              <li>+971 52 8673675</li>
              <li>Dubai Investment Park First, Dubai, UAE</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-white/40">
          <p>© {new Date().getFullYear()} Suvik Group Of Companies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
