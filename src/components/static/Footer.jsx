import { Instagram, Twitter, TrendingUp } from "lucide-react";

const footerLinks = {
  shop: [
    { label: "Shop All", href: "#" },
    { label: "New Arrivals", href: "#" },
    { label: "Collections", href: "#" },
    { label: "Sale", href: "#" },
  ],
  support: [
    { label: "Contact Us", href: "#" },
    { label: "Shipping & Returns", href: "#" },
    { label: "Size Guide", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  brand: [
    { label: "About AURORA", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Press Kit", href: "#" },
    { label: "Careers", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "Twitter" },
  { icon: TrendingUp, label: "TikTok" },
];

export default function Footer() {
  const ACCENT_COLOR = "text-purple-400";
  const PRIMARY_TEXT_COLOR = "text-white";
  const SUBTLE_TEXT_COLOR = "text-gray-400";
  const BORDER_COLOR = "border-gray-800";

  return (
    <footer
      className={`bg-black border-t ${BORDER_COLOR} ${PRIMARY_TEXT_COLOR}`}>
      <div className="max-w-[90%] mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-black uppercase text-purple-400">
              AURORA
            </h3>
            <p className={`text-sm ${SUBTLE_TEXT_COLOR} leading-relaxed`}>
              Bold fashion for culture movers. Express yourself through
              cutting-edge streetwear.
            </p>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="space-y-4">
              <h4
                className={`text-xs font-black uppercase tracking-widest ${ACCENT_COLOR}`}>
                {section.toUpperCase()}
              </h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`text-sm ${SUBTLE_TEXT_COLOR} hover:${ACCENT_COLOR} transition-colors duration-300 font-medium`}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className={`border-t ${BORDER_COLOR} pt-8 flex justify-between items-center flex-col md:flex-row gap-8`}>
          <p
            className={`text-xs ${SUBTLE_TEXT_COLOR} uppercase tracking-widest font-bold`}>
            © 2025 AURORA. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            {socialLinks.map(social => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href="#"
                  className={`${SUBTLE_TEXT_COLOR} hover:${ACCENT_COLOR} transition-colors duration-300`}
                  aria-label={social.label}>
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
