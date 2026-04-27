import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MessageCircle, Video, Palette, PenTool, Briefcase, Printer, MonitorSmartphone } from 'lucide-react';

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <nav className="navbar glass">
        <div className="container flex-between">
          <a href="#" className="heading-md" style={{ fontSize: '1.25rem', fontFamily: 'var(--font-mono)' }}>
            Nogie<span className="text-accent">.</span>
          </a>
          
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <div className="social-links">
            <a href="mailto:nogieddesigner@gmail.com" className="social-icon" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="https://wa.me/2349020115942" target="_blank" rel="noreferrer" className="social-icon" aria-label="WhatsApp">
              <MessageCircle size={20} />
            </a>
            <a href="https://www.tiktok.com/@nogieddesigner" target="_blank" rel="noreferrer" className="social-icon" aria-label="TikTok">
              <Video size={20} />
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-glow"></div>
          <div className="container">
            <motion.div 
              className="hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="hero-subtitle">Hello, I'm Nogie Solomon</span>
              <h1 className="heading-xl" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
                Creative Director & <br />
                <span className="text-gradient">Graphic Designer.</span>
              </h1>
              <p className="hero-description">
                With close to a decade of hands-on experience, I deliver impactful visual solutions across diverse sectors—creating designs that not only look visually appealing but also communicate clearly and elevate brand identity.
              </p>
              
              <motion.a 
                href="#contact" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Collaborate <ArrowUpRight size={20} />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container">
          <div className="section-header">
            <span className="section-label">01. About Me</span>
            <h2 className="heading-lg">Designing with Purpose</h2>
          </div>
          
          <div className="grid about-grid">
            <motion.div 
              className="about-text"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.p variants={fadeInUp}>
                I am a passionate and experienced Creative Director & Graphic Designer. My work spans church programs, educational institutions, corporate organizations, burial ceremonies, and social events.
              </motion.p>
              <motion.p variants={fadeInUp}>
                <strong>My Design Approach:</strong> I approach every project with a blend of creativity and strategy, ensuring that each design serves a clear purpose. By understanding the client's vision, audience, and message, I create clean, engaging, and result-driven visuals that stand out and deliver impact.
              </motion.p>
            </motion.div>

            <motion.div 
              className="about-image glass"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img src="/nogie solonon dp.jpg.jpeg" alt="Nogie Solomon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="container">
          <div className="section-header">
            <span className="section-label">02. What I Do</span>
            <h2 className="heading-lg">My Services</h2>
          </div>

          <motion.div 
            className="grid projects-grid"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Branding & Identity",
                desc: "Creating cohesive brand identities that elevate your organization's presence.",
                icon: <Briefcase size={24} />
              },
              {
                title: "Flyer & Poster Design",
                desc: "Eye-catching promotional materials designed to capture attention and communicate clearly.",
                icon: <PenTool size={24} />
              },
              {
                title: "Event Creative Direction",
                desc: "Comprehensive visual direction for Church, School, Corporate, Burial, and Social events.",
                icon: <Palette size={24} />
              },
              {
                title: "Social Media Design",
                desc: "Engaging digital graphics tailored to boost your online presence and audience connection.",
                icon: <MonitorSmartphone size={24} />
              },
              {
                title: "Print Design",
                desc: "High-quality designs for physical mediums including banners, programs, and certificates.",
                icon: <Printer size={24} />
              }
            ].map((service, idx) => (
              <motion.div key={idx} className="project-card glass" variants={fadeInUp}>
                <div className="project-icon">
                  {service.icon}
                </div>
                <h3 className="project-title">{service.title}</h3>
                <p className="project-desc">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Gallery / Projects Section */}
        <section id="projects" className="container">
          <div className="section-header">
            <span className="section-label">03. Portfolio Focus</span>
            <h2 className="heading-lg">My Recent Work</h2>
            <p className="hero-description" style={{ marginTop: '1rem', maxWidth: '800px' }}>
              Here is a curated selection of some of my recent design projects across various categories, including branding, events, and print media.
            </p>
          </div>

          <motion.div 
            className="gallery-grid"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              "WhatsApp Image 2026-04-24 at 10.48.55 AM.jpeg",
              "WhatsApp Image 2026-04-24 at 10.48.56 AM (1).jpeg",
              "WhatsApp Image 2026-04-24 at 10.48.56 AM (2).jpeg",
              "WhatsApp Image 2026-04-24 at 10.48.56 AM (3).jpeg",
              "WhatsApp Image 2026-04-24 at 10.48.56 AM.jpeg",
              "WhatsApp Image 2026-04-24 at 10.48.57 AM (1).jpeg",
              "WhatsApp Image 2026-04-24 at 10.48.57 AM (2).jpeg",
              "WhatsApp Image 2026-04-24 at 10.48.57 AM (3).jpeg",
              "WhatsApp Image 2026-04-24 at 10.48.57 AM.jpeg",
              "WhatsApp Image 2026-04-24 at 10.48.58 AM (1).jpeg",
              "WhatsApp Image 2026-04-24 at 10.48.58 AM.jpeg",
              "WhatsApp Image 2026-04-24 at 10.48.59 AM.jpeg",
              "WhatsApp Image 2026-04-24 at 10.51.25 AM (1).jpeg",
              "WhatsApp Image 2026-04-24 at 10.51.25 AM (2).jpeg",
              "WhatsApp Image 2026-04-24 at 10.51.25 AM (3).jpeg",
              "WhatsApp Image 2026-04-24 at 10.51.25 AM (4).jpeg",
              "WhatsApp Image 2026-04-24 at 10.51.25 AM.jpeg",
              "WhatsApp Image 2026-04-24 at 10.51.26 AM (1).jpeg",
              "WhatsApp Image 2026-04-24 at 10.51.26 AM (2).jpeg",
              "WhatsApp Image 2026-04-24 at 10.51.26 AM (3).jpeg",
              "WhatsApp Image 2026-04-24 at 10.51.26 AM (4).jpeg",
              "WhatsApp Image 2026-04-24 at 10.51.26 AM (5).jpeg",
              "WhatsApp Image 2026-04-24 at 10.51.26 AM (6).jpeg",
              "WhatsApp Image 2026-04-24 at 10.51.26 AM.jpeg",
              "WhatsApp Image 2026-04-24 at 10.51.27 AM (1).jpeg",
              "WhatsApp Image 2026-04-24 at 10.51.27 AM.jpeg"
            ].map((imgSrc, idx) => (
              <motion.div key={idx} className="gallery-item glass" variants={fadeInUp}>
                <img src={`/${imgSrc}`} alt={`Portfolio project ${idx + 1}`} loading="lazy" />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container">
          <motion.div 
            className="glass"
            style={{ padding: '4rem', borderRadius: '24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="hero-glow" style={{ width: '400px', height: '400px', opacity: 0.5 }}></div>
            <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>Let's Work Together</h2>
            <p className="about-text" style={{ maxWidth: '600px', margin: '0 auto 3rem auto' }}>
              I am available for freelance projects, collaborations, and creative partnerships. Let's bring your ideas to life with creativity and precision.
            </p>
            
            <div className="flex-center" style={{ gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href="https://wa.me/2349020115942" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ marginTop: 0 }}>
                <MessageCircle size={20} /> WhatsApp Me
              </a>
              <a href="mailto:nogieddesigner@gmail.com" className="btn glass" style={{ marginTop: 0, border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'white' }}>
                <Mail size={20} /> Send an Email
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="footer container">
        <div className="footer-content">
          <div className="footer-text">
            © 2026 Nogie Solomon. Creative Director & Graphic Designer.
          </div>
          <div className="social-links">
            <a href="https://wa.me/2349020115942" target="_blank" rel="noreferrer" className="social-icon"><MessageCircle size={18} /></a>
            <a href="https://www.tiktok.com/@nogieddesigner" target="_blank" rel="noreferrer" className="social-icon"><Video size={18} /></a>
            <a href="mailto:nogieddesigner@gmail.com" className="social-icon"><Mail size={18} /></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
