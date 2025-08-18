import React from "react";
import "./footer.css";

const socialLinks = [
	{ href: "https://github.com/abhijit9864", icon: <i className="fab fa-github"></i>, label: "GitHub" },
	{ href: "www.linkedin.com/in/abhijit-pradhan-512697246", icon: <i className="fab fa-linkedin"></i>, label: "LinkedIn" },
	{ href: "https://x.com/AbhijitPra24750", icon: <i className="fab fa-twitter"></i>, label: "Twitter" },
	{ href: "mailto:abhijitpradhan986@gmail.com", icon: <i className="fas fa-envelope"></i>, label: "Email" },
];

const navLinks = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Education", href: "#education" },
	{ name: "Experience", href: "#experience" },
	{ name: "Projects", href: "#projects" },
	{ name: "Skills", href: "#skills" },
];

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-section left">
				<div className="footer-title">Abhijit's Portfolio</div>
				<div className="footer-desc">
					Thank you for visiting my personal portfolio website. Connect with me over socials.<br /><br />
					Keep Rising 🚀. Connect with me over live chat!
				</div>
			</div>
			<div className="footer-section center">
				<div className="footer-title" style={{ fontSize: '1.3rem', marginBottom: 10 }}>Quick Links</div>
				   <ul className="footer-links">
					   {navLinks.map(link => (
						   <li key={link.name} className="footer-link-arrow">
							   <span className="arrow">➔</span> <a href={link.href} style={{ color: '#fff', textDecoration: 'none' }}>{link.name}</a>
						   </li>
					   ))}
				   </ul>
			</div>
			<div className="footer-section right">
				<div className="footer-title" style={{ fontSize: '1.3rem', marginBottom: 10 }}>Contact Info</div>
				<div className="footer-contact">
					<div>📞 +91 9876543210</div>
					<div>✉️ abhijit@email.com</div>
				</div>
				   <div className="footer-socials">
					   {socialLinks.map(link => (
						   <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
							   {link.icon}
						   </a>
					   ))}
				   </div>
			   </div>
			   <div className="footer-bottom">Designed with ❤️ by <span style={{ color: '#ffff00ff', fontWeight: 'bold' }}>ABHIJIT</span></div>
			   <div className="footer-divider-horizontal"></div>
			{/* FontAwesome CDN for icons */}
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
		</footer>
	);
};

export default Footer;
