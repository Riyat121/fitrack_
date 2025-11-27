"use client"

import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">F</span>
              </div>
              <span className="font-semibold text-lg text-foreground">FitFlow</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transform your fitness journey with personalized training and expert guidance.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <nav className="space-y-3">
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Features
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Pricing
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                How It Works
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Testimonials
              </a>
            </nav>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <nav className="space-y-3">
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                About
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Blog
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Careers
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <nav className="space-y-3">
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Disclaimer
              </a>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center md:text-left">© 2025 FitFlow. All rights reserved.</p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-accent transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-accent transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-accent transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-accent transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Email" className="text-muted-foreground hover:text-accent transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
