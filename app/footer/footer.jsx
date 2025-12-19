import Image from "next/image";
import { Mail, Linkedin, Phone, MapPin  } from "lucide-react"
import Link from "next/link";
export default function Footer(){
    return(
            <footer className="w-full bg-navbar text-navbar-foreground border border-border p-4">
                <div className="flex justify-between px-12 mt-5 mb-12">
                    <div>
                        <Image src="/Enoves.svg" alt="Enoves logo" width={100} height={90} priority />
                    </div>
                    <div className="flex justify-between gap-8">
                        <div><Link href="/">Home</Link></div>
                        <div><Link href="/about">About us</Link></div>
                        <div><Link href="/services">Services</Link></div>
                        <div><Link href="/blog">Portfolio</Link></div>
                        <div><Link href="/blog">Careers</Link></div>
                    </div>
                    <div className="flex justify-between gap-2">
                        <div><a href="https://www.linkedin.com/"><Mail /></a></div>
                        <div><a href="https://www.linkedin.com/"><Phone /></a></div>
                        <div><a href="https://www.linkedin.com/"><Linkedin /></a></div>
                        
                    </div>
                </div>
                
                {/* second row */}
                <div className="flex justify-between px-12 mb-10">
                    <div className="flex justify-start gap-20">
                        <div className="flex gap-2">
                        <div><Mail className="text-chart-1 w-6 h-6" /></div>
                        <p>enovesoffical@gmail.com</p>
                    </div>
                    <div className="flex gap-2">
                        <Phone className="text-chart-1 w-6 h-6" />
                        <p>+92-321-6013698</p>
                    </div>
                    <div className="flex gap-2">
                        <div><MapPin className="text-chart-1 w-6 h-6" /></div>
                        <p>123 Main Street, Lahore, Pakistan</p>
                    </div>
                    </div>
                    <div className="flex gap-2">
                        <p><Link href="/contact">Privacy Policy</Link></p>
                        <p><Link href="/contact">Terms of Service</Link></p>
                    </div>
                    
                </div>
                <div>
                    <p className="text-center mt-4 text-sm border-t">© 2024 Enoves. All rights reserved.</p>
                </div>
            </footer>
    )
}