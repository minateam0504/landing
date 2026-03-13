import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";
import {
  ShoppingBag,
  Users,
  Truck,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Menu,
  X,
  Instagram as InstagramIcon,
  Mail,
  MapPin,
  Heart,
  Sparkles,
  Baby,
  RefreshCw,
} from "lucide-react";

const FloatingDecoration = ({
  icon,
  className,
  delay = 0,
}: {
  icon: React.ReactNode;
  className: string;
  delay?: number;
}) => (
  <motion.div
    className={`absolute text-sage/20 hidden md:block pointer-events-none ${className}`}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0],
      scale: [1, 1.1, 0.9, 1],
    }}
    transition={{
      duration: 5 + Math.random() * 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  >
    {icon}
  </motion.div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Marketplace", href: "#marketplace" },
    { name: "Concierge", href: "#concierge" },
    { name: "Circle", href: "#circle" },
    { name: "Events", href: "#events" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-cream/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            {/* <div className="w-10 h-10 bg-sage rounded-full flex items-center justify-center text-white font-serif italic text-xl">
              M
            </div> */}
            <div className="w-5 h-5 bg-sage rounded-full flex items-center justify-center text-white font-serif italic text-xl">
              <img
                src={`${import.meta.env.BASE_URL}LogoWhite.png`}
                alt="MINA Logo"
                className="w-34 h-auto"
              />
            </div>

            {/* <span className="text-2xl font-serif tracking-tight font-bold">
              MINA
            </span> */}
            <img
              src={`${import.meta.env.BASE_URL}minaLogo.png`}
              alt="MINA Logo"
              className="w-34 h-auto"
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-sage transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://shop.getmina.app/"
            className="bg-sage text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-olive transition-all shadow-lg shadow-sage/20"
          >
            Shop Now
          </a>
        </div>

        <button
          className="md:hidden text-ink"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-cream z-[60] p-8 flex flex-col"
          >
            <div className="flex justify-end mb-12">
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-serif"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://shop.getmina.app/"
                className="bg-sage text-white px-8 py-4 rounded-full text-xl font-bold text-center mt-4"
              >
                Shop Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-cream">
    {/* Background Patterns */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: "radial-gradient(#5A5A40 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>
    </div>

    {/* Decorative Elements */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -left-20 w-[500px] h-[500px] border border-sage/10 rounded-full"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-10 text-terracotta/10"
      >
        <Sparkles size={120} />
      </motion.div>

      {/* Additional Floating Elements */}
      <FloatingDecoration
        icon={<Baby size={60} />}
        className="top-1/3 left-10 opacity-10"
        delay={2}
      />
      <FloatingDecoration
        icon={<Heart size={40} />}
        className="bottom-1/4 left-1/4 opacity-10"
        delay={1.5}
      />
    </div>

    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        <div className="flex items-center gap-3 text-sage font-bold mb-8">
          <MapPin size={18} />
          <span className="text-xs sm:text-sm tracking-[0.2em] uppercase">
            Serving families in San Francisco
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif leading-[1.1] lg:leading-[0.9] mb-10 text-ink">
          The easiest way to <br />
          <span className="italic text-terracotta font-light">
            circulate
          </span>{" "}
          baby gear.
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-ink/70 mb-12 max-w-lg leading-relaxed font-light">
          Buy, sell, swap, or let MINA handle everything for you. We keep the
          gear moving so you can focus on what matters.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://shop.getmina.app/"
            className="bg-sage text-white px-10 lg:px-12 py-4 lg:py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-olive transition-all shadow-2xl shadow-sage/30 text-base lg:text-lg"
          >
            Browse Marketplace <ArrowRight size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#concierge"
            className="bg-white border border-sage/20 text-sage px-10 lg:px-12 py-4 lg:py-5 rounded-full font-bold hover:bg-sage/5 transition-all text-center text-base lg:text-lg"
          >
            Book Concierge
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div className="relative aspect-[4/5] rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden oil-painting-canvas oil-painting-shadow group">
          <img
            src={`${import.meta.env.BASE_URL}hero5.png`}
            alt="MINA Baby Gear"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent"></div>
        </div>

        {/* Floating elements */}
        <FloatingDecoration
          icon={<Baby size={40} />}
          className="-top-12 -left-12"
          delay={0.5}
        />
        <FloatingDecoration
          icon={<Heart size={30} />}
          className="bottom-20 -right-10"
          delay={1.2}
        />
        <FloatingDecoration
          icon={<Sparkles size={35} />}
          className="-bottom-10 left-1/4"
          delay={0.8}
        />

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 -right-10 w-32 h-32 bg-terracotta/10 rounded-full blur-3xl"
        />
      </motion.div>
    </div>
  </section>
);

const Problem = () => {
  const floatingIcons = [
    { icon: <Baby size={32} />, top: "10%", left: "10%", delay: 0 },
    { icon: <ShoppingBag size={28} />, top: "20%", right: "15%", delay: 1 },
    { icon: <Heart size={24} />, bottom: "15%", left: "20%", delay: 0.5 },
    { icon: <Sparkles size={30} />, bottom: "25%", right: "10%", delay: 1.5 },
    { icon: <RefreshCw size={26} />, top: "40%", left: "5%", delay: 2 },
    { icon: <Truck size={28} />, bottom: "40%", right: "5%", delay: 2.5 },
  ];

  return (
    <section
      id="about"
      className="py-40 bg-sage/5 px-6 relative overflow-hidden"
    >
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #5A5A40 25%, transparent 25%, transparent 50%, #5A5A40 50%, #5A5A40 75%, transparent 75%, transparent)",
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      {/* Floating Decorative Icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-sage/20 hidden md:block"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-5xl sm:text-7xl lg:text-8xl font-serif mb-12 text-ink leading-tight"
          >
            Baby gear <br />
            <span className="italic text-terracotta">piles up fast.</span>
          </motion.h2>

          <div className="space-y-10 text-lg sm:text-2xl lg:text-3xl text-ink/70 leading-relaxed font-light">
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Babies outgrow things every few months.
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              But listing items online, coordinating pickups, and figuring out
              what to keep or donate takes time most parents don’t have.
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="font-serif italic text-sage text-3xl sm:text-4xl lg:text-5xl py-6"
            >
              So perfectly good baby gear sits unused.
            </motion.p>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="pt-8"
            >
              <span className="inline-block bg-sage text-white px-8 py-3 rounded-full font-bold text-lg sm:text-xl shadow-xl shadow-sage/20">
                MINA keeps things moving.
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const System = () => {
  const cards = [
    {
      id: "marketplace",
      title: "Marketplace",
      desc: "Buy, sell, or give away baby items locally within a trusted community.",
      icon: <ShoppingBag />,
      img: `${import.meta.env.BASE_URL}hero3.png`,
      // img: "https://images.unsplash.com/photo-1604298044934-183b970aa1df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "bg-sage/10 text-sage",
    },
    {
      id: "concierge-card",
      title: "Concierge",
      desc: "We pick up your outgrown items and handle sorting, cleaning, and listing.",
      icon: <Truck />,
      img: `${import.meta.env.BASE_URL}hero3.png`,
      color: "bg-terracotta/10 text-terracotta",
    },
    {
      id: "circle",
      title: "MINA Circle",
      desc: "A vetted swap network where parents earn credits and access partner perks.",
      icon: <Users />,
      img: `${import.meta.env.BASE_URL}hero3.png`,
      color: "bg-olive/10 text-olive",
    },
  ];

  return (
    <section
      id="marketplace"
      className="py-32 px-6 relative overflow-hidden bg-cream"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: "radial-gradient(#5A5A40 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <FloatingDecoration
        icon={<ShoppingBag size={80} />}
        className="top-20 right-10 opacity-10"
        delay={0.5}
      />
      <FloatingDecoration
        icon={<RefreshCw size={60} />}
        className="bottom-20 left-10 opacity-10"
        delay={1.2}
      />

      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-sage/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl lg:text-7xl font-serif mb-6 leading-tight"
          >
            The MINA System
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-ink/60 font-light max-w-2xl mx-auto"
          >
            Three ways we help you circulate your gear.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              id={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.2,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative aspect-square rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden mb-8 oil-painting-canvas oil-painting-shadow group">
                {card.img ? (
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full bg-sage/5 flex items-center justify-center">
                    <span className="text-sage/20 font-serif italic">
                      {card.title}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-500"></div>
              </div>
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-all ${card.color}`}
              >
                {React.cloneElement(card.icon as React.ReactElement<any>, {
                  size: 28,
                })}
              </motion.div>
              <h3 className="text-2xl sm:text-3xl font-serif mb-4 group-hover:text-sage transition-colors">
                {card.title}
              </h3>
              <p className="text-base sm:text-lg text-ink/60 mb-8 leading-relaxed font-light">
                {card.desc}
              </p>
              <a
                href="https://shop.getmina.app/"
                className="inline-flex items-center gap-2 text-sage font-bold group-hover:gap-4 transition-all text-sm sm:text-base"
              >
                Learn more <ChevronRight size={20} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Lifecycle = () => (
  <section className="py-32 px-6 bg-cream overflow-hidden relative">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: "radial-gradient(#5A5A40 2px, transparent 2px)",
          backgroundSize: "60px 60px",
        }}
      ></div>
    </div>

    {/* Floating Elements */}
    <FloatingDecoration
      icon={<Truck size={40} />}
      className="top-20 right-20 opacity-10"
      delay={0.5}
    />
    <FloatingDecoration
      icon={<Baby size={30} />}
      className="bottom-40 left-10 opacity-10"
      delay={1.2}
    />

    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="w-[280px] sm:w-[320px] h-[560px] sm:h-[640px] bg-ink rounded-[3rem] sm:rounded-[3.5rem] border-[8px] sm:border-[10px] border-ink shadow-2xl mx-auto relative overflow-hidden">
          <div className="bg-cream h-full p-6 sm:p-8 pt-10 sm:pt-12">
            <div className="flex items-center gap-4 mb-8 sm:mb-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sage rounded-full flex items-center justify-center text-white">
                <Baby size={24} />
              </div>
              <div>
                <p className="text-[8px] sm:text-[10px] uppercase tracking-widest text-ink/40 font-bold">
                  Milestone Alert
                </p>
                <p className="font-serif text-base sm:text-lg">
                  Baby is 6 months old
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-sage/5"
              >
                <p className="text-[10px] sm:text-xs font-bold text-sage mb-2 sm:mb-3 uppercase tracking-wider">
                  You may need:
                </p>
                <div className="flex gap-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cream rounded-lg overflow-hidden">
                    <img
                      src={`${import.meta.env.BASE_URL}highChair.jpg`}
                      alt="High Chair"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-medium">
                      High Chair
                    </p>
                    <p className="text-[10px] sm:text-xs text-ink/40">
                      3 items available nearby
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-terracotta/5 p-4 sm:p-5 rounded-2xl border border-terracotta/10"
              >
                <p className="text-[10px] sm:text-xs font-bold text-terracotta mb-2 sm:mb-3 uppercase tracking-wider">
                  Time to circulate:
                </p>
                <div className="flex gap-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-lg flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <RefreshCw size={20} className="text-terracotta/40" />
                    </motion.div>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-medium">Bassinet</p>
                    <p className="text-[10px] sm:text-xs text-terracotta/60">
                      Estimated value: $120
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <button className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 bg-sage text-white py-3 sm:py-4 rounded-2xl text-xs sm:text-sm font-bold shadow-lg">
              Plan my next steps
            </button>
          </div>
        </div>

        {/* Floating elements around phone */}
        <FloatingDecoration
          icon={<Sparkles size={24} />}
          className="top-1/4 -left-10"
          delay={0.3}
        />
        <FloatingDecoration
          icon={<RefreshCw size={20} />}
          className="bottom-1/3 -right-8"
          delay={0.7}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif mb-8 leading-tight">
          Stay ahead of baby milestones.
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-ink/70 mb-10 leading-relaxed font-light">
          MINA is lifecycle infrastructure. Our AI copilot predicts what you'll
          need next and what you're ready to pass on, so you're never stuck with
          gear you don't need.
        </p>
        <motion.button
          whileHover={{ x: 10 }}
          className="text-sage font-bold flex items-center gap-3 text-lg sm:text-xl transition-all"
        >
          Learn about Lifecycle Intelligence <ArrowRight size={24} />
        </motion.button>
      </motion.div>
    </div>
  </section>
);

const CircularPath = () => (
  <section className="py-40 px-6 bg-sage text-white text-center relative overflow-hidden">
    {/* Pattern Background */}
    <div
      className="absolute inset-0 opacity-[0.05] pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
        backgroundSize: "30px 30px",
      }}
    ></div>

    {/* Background decorative elements */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/2 -left-1/4 w-[1000px] h-[1000px] border border-white/5 rounded-full"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-1/4 right-10 text-white/10"
      >
        <RefreshCw size={120} />
      </motion.div>
    </div>

    <div className="max-w-5xl mx-auto relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-20 leading-tight"
      >
        Every item gets a second life.
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center justify-between gap-16 mb-20 relative">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-white/30 -translate-y-1/2 z-0"></div>

        {[
          { label: "Parent", icon: <Users /> },
          { label: "MINA", icon: <RefreshCw />, active: true },
          { label: "Next Family", icon: <Heart /> },
        ].map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.3, type: "spring", damping: 12 }}
            className="relative z-10 flex flex-col items-center gap-6 group"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: step.active ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center ${step.active ? "bg-terracotta text-white" : "bg-white text-sage"} shadow-2xl cursor-pointer`}
            >
              {React.cloneElement(step.icon as React.ReactElement<any>, {
                size: 32,
              })}
            </motion.div>
            <p className="font-serif text-xl sm:text-2xl group-hover:text-terracotta transition-colors">
              {step.label}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="text-xl sm:text-2xl md:text-3xl text-white/80 italic font-light leading-relaxed"
      >
        Nothing sits unused. We ensure gear is resold, shared, or donated
        through trusted partners.
      </motion.p>
    </div>
  </section>
);

const Community = () => {
  const [activeQuote, setActiveQuote] = useState(0);
  const quotes = [
    {
      text: "MINA made clearing out the nursery so stress-free. The concierge service is a game changer for busy parents.",
      author: "Sarah, Mission Bay",
    },
    {
      text: "I found a beautiful Snoo for half the price. Love the curated feel of the marketplace.",
      author: "David, Noe Valley",
    },
    {
      text: "The Circle swap events are my favorite way to meet other parents in the neighborhood.",
      author: "Emily, Richmond District",
    },
    {
      text: "Finally, a sustainable way to handle the constant cycle of baby gear. MINA is exactly what SF needed.",
      author: "Michael, Castro",
    },
    {
      text: "The quality control is what sets MINA apart. I trust every item I buy here.",
      author: "Jessica, Marina",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [quotes.length]);

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-cream">
      {/* Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(135deg, #141414 25%, transparent 25%, transparent 50%, #141414 50%, #141414 75%, transparent 75%, transparent)`,
          backgroundSize: "30px 30px",
        }}
      ></div>

      {/* Floating Elements */}
      <FloatingDecoration
        icon={<Heart size={140} />}
        className="top-20 right-20 opacity-5"
        delay={0.5}
      />
      <FloatingDecoration
        icon={<Sparkles size={80} />}
        className="bottom-40 left-10 opacity-5"
        delay={1.2}
      />
      <FloatingDecoration
        icon={<Baby size={60} />}
        className="top-1/3 left-1/4 opacity-5"
        delay={2}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif mb-12 leading-tight">
              Built with the SF parent community.
            </h2>

            <div className="relative h-48 sm:h-56">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeQuote}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute inset-0"
                >
                  <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-ink/80 mb-8 leading-relaxed">
                    "{quotes[activeQuote].text}"
                  </p>
                  <p className="font-bold text-sage text-base sm:text-lg">
                    — {quotes[activeQuote].author} parent
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex gap-3 mt-12">
              {quotes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveQuote(i)}
                  className={`w-3 h-3 rounded-full transition-all ${activeQuote === i ? "bg-sage w-8" : "bg-sage/20"}`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="rounded-[2rem] sm:rounded-[2.5rem] aspect-square bg-sage/10 oil-painting-shadow overflow-hidden"
            >
              <img
                src={`${import.meta.env.BASE_URL}community.jpg`}
                alt="Community"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            {/* <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="rounded-[2rem] sm:rounded-[2.5rem] aspect-square bg-sage/10 mt-12 oil-painting-shadow overflow-hidden"
            >
              <img
                src={`${import.meta.env.BASE_URL}community2.png`}
                alt="Community"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

const ConciergeHighlight = () => (
  <section
    id="concierge"
    className="py-32 px-6 bg-terracotta text-white relative overflow-hidden"
  >
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #FFFFFF 1px, transparent 1px), linear-gradient(#FFFFFF 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>
    </div>

    {/* Floating Decorative Elements */}
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        animate={{ rotate: [0, 15, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-10 right-1/4 text-white/10"
      >
        <Sparkles size={160} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-20 left-10 text-white/5"
      >
        <Heart size={80} />
      </motion.div>
      <FloatingDecoration
        icon={<Truck size={80} />}
        className="top-1/3 left-1/4 text-white/10"
        delay={0.4}
      />
      <FloatingDecoration
        icon={<ShoppingBag size={60} />}
        className="bottom-1/4 right-10 text-white/10"
        delay={1.2}
      />
    </div>

    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif mb-8 leading-tight">
          Too busy to list?
        </h2>
        <h3 className="text-2xl sm:text-3xl font-serif mb-10 text-white/90 italic">
          Try the Nursery Reset.
        </h3>
        <p className="text-lg sm:text-2xl mb-12 text-white/80 leading-relaxed font-light">
          We handle everything from pickup to sorting, cleaning, and listing.
          You get your space back without lifting a finger.
        </p>
        <div className="grid sm:grid-cols-2 gap-8 mb-12">
          {[
            "Home Pickup",
            "Expert Sorting",
            "Professional Listings",
            "Buyer Coordination",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-4"
            >
              <CheckCircle2 className="text-white" size={24} />
              <span className="text-lg sm:text-xl font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://shop.getmina.app/"
          className="bg-white text-terracotta px-10 lg:px-12 py-4 lg:py-5 rounded-full font-bold text-lg lg:text-xl shadow-2xl inline-block"
        >
          Book Concierge
        </motion.a>
      </motion.div>
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="rounded-[3rem] sm:rounded-[4rem] shadow-2xl oil-painting-canvas aspect-[4/3] bg-white/10 overflow-hidden"
        >
          <img
            src={`${import.meta.env.BASE_URL}tooBusy.jpg`}
            alt="Concierge Service"
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const Events = () => (
  <section
    id="events"
    className="py-32 px-6 bg-cream text-center relative overflow-hidden"
  >
    {/* Pattern Background */}
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(#141414 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    ></div>

    {/* Floating Elements */}
    <FloatingDecoration
      icon={<Users size={60} />}
      className="top-20 left-10 opacity-10"
      delay={0.2}
    />
    <FloatingDecoration
      icon={<MapPin size={40} />}
      className="bottom-20 right-10 opacity-10"
      delay={1.5}
    />
    <FloatingDecoration
      icon={<Sparkles size={50} />}
      className="top-1/3 right-1/4 opacity-10"
      delay={0.8}
    />

    <div className="max-w-4xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="inline-block bg-sage/10 text-sage px-6 py-2 rounded-full text-xs sm:text-sm font-bold mb-8 uppercase tracking-widest">
          MINA Events
        </div>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif mb-10 leading-tight">
          Join the Community.
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-ink/70 mb-12 leading-relaxed font-light">
          MINA regularly hosts community-focused events in San Francisco, from
          gear swaps to expert-led workshops. Join us to connect with fellow
          parents and unlock exclusive partner perks.
        </p>
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#5A5A40" }}
          whileTap={{ scale: 0.95 }}
          className="bg-sage text-white px-10 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl transition-all shadow-xl"
        >
          View Upcoming Events
        </motion.button>
      </motion.div>
    </div>
  </section>
);

const Instagram = () => (
  <section className="py-32 px-6 bg-white flex flex-col items-center relative overflow-hidden">
    {/* Pattern Background */}
    <div
      className="absolute inset-0 opacity-[0.02] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(45deg, #5A5A40 25%, transparent 25%, transparent 50%, #5A5A40 50%, #5A5A40 75%, transparent 75%, transparent)",
        backgroundSize: "40px 40px",
      }}
    ></div>

    {/* Floating Elements */}
    <FloatingDecoration
      icon={<InstagramIcon size={60} />}
      className="top-20 right-10 opacity-10"
      delay={0.5}
    />
    <FloatingDecoration
      icon={<Sparkles size={100} />}
      className="top-1/4 left-10 opacity-10"
      delay={1.2}
    />
    <FloatingDecoration
      icon={<Heart size={60} />}
      className="bottom-10 left-1/4 opacity-10"
      delay={0.8}
    />

    <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif mb-6 text-center relative z-10">
      Follow the Journey.
    </h2>
    <p className="text-lg sm:text-xl text-ink/60 mb-16 text-center max-w-2xl font-light relative z-10">
      Be up to date on our latest events, gear drops, and announcements!
    </p>

    <div className="w-full max-w-6xl mb-16 rounded-[3rem] overflow-hidden shadow-xl border border-sage/5 relative z-10">
      <iframe
        src="//lightwidget.com/widgets/89721168e6405239a85ddb1a1e66d58b.html"
        scrolling="no"
        className="lightwidget-widget w-full border-0 overflow-hidden"
        style={{
          width: "100%",
          height: "600px",
          border: 0,
          overflow: "hidden",
        }}
      ></iframe>
    </div>

    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href="https://www.instagram.com/getmina.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-sage text-white px-10 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold hover:bg-olive transition-all shadow-xl relative z-10"
    >
      Follow @getmina.app
    </motion.a>
  </section>
);

const FinalCTA = () => (
  <section className="py-40 px-6 text-center bg-cream relative overflow-hidden">
    {/* Pattern Background */}
    <div
      className="absolute inset-0 opacity-[0.02] pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(#5A5A40 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    ></div>

    {/* Floating Decorative Elements */}
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -right-20 w-[600px] h-[600px] border border-terracotta/5 rounded-full"
      />
      <FloatingDecoration
        icon={<Baby size={100} />}
        className="top-1/4 left-1/4 opacity-10"
        delay={0.5}
      />
      <FloatingDecoration
        icon={<Heart size={80} />}
        className="bottom-1/4 right-1/4 opacity-10"
        delay={1.2}
      />
      <FloatingDecoration
        icon={<Sparkles size={60} />}
        className="top-1/2 right-10 opacity-10"
        delay={0.8}
      />
      <FloatingDecoration
        icon={<ShoppingBag size={50} />}
        className="top-10 left-1/2 opacity-10"
        delay={1.5}
      />
      <FloatingDecoration
        icon={<RefreshCw size={40} />}
        className="bottom-10 left-1/4 opacity-10"
        delay={2.0}
      />
    </div>

    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-96 h-96 bg-sage/20 rounded-full blur-[120px]"
      ></motion.div>
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-terracotta/20 rounded-full blur-[120px]"
      ></motion.div>
    </div>

    <div className="max-w-4xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl sm:text-7xl lg:text-8xl font-serif mb-10 leading-tight">
          Ready to circulate?
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-ink/60 mb-16 max-w-2xl mx-auto leading-relaxed font-light">
          Join thousands of San Francisco parents. Download our iOS app to
          manage your gear, browse the marketplace, and get milestone alerts on
          the go.
        </p>

        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://shop.getmina.app/"
              className="bg-sage text-white px-10 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl hover:bg-olive transition-all shadow-2xl"
            >
              Browse Marketplace
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://shop.getmina.app/"
              className="bg-terracotta text-white px-10 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl hover:bg-terracotta/90 transition-all shadow-2xl"
            >
              Book Concierge
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="pt-12 border-t border-sage/10 w-full max-w-md"
          >
            <p className="text-[10px] sm:text-xs font-bold text-sage uppercase tracking-widest mb-6">
              Download the App
            </p>
            <a
              href="https://apps.apple.com/app/mina"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:scale-105 transition-transform"
            >
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1276560000&h=7e5b6851527715c449a6ccb5ad6c5446"
                alt="Download on the App Store"
                className="h-12 sm:h-16 w-auto"
                referrerPolicy="no-referrer"
              />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-ink text-white py-24 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 mb-20">
      <div className="col-span-2">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-10 h-10 bg-sage rounded-full flex items-center justify-center text-white font-serif italic text-xl">
            M
          </div>
          <span className="text-3xl font-serif tracking-tight font-bold">
            MINA
          </span>
        </div>
        <p className="text-white/60 text-lg max-w-md leading-relaxed font-light mb-10">
          The premium marketplace for parents to circulate baby gear with ease
          and love. Serving the San Francisco community since 2023.
        </p>
        <div className="flex gap-6">
          <a
            href="#"
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-ink transition-all"
          >
            <InstagramIcon size={20} />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-ink transition-all"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div>
        <h4 className="font-serif text-xl mb-8">Explore</h4>
        <ul className="space-y-4 text-white/60 font-light">
          <li>
            <a
              href="#marketplace"
              className="hover:text-white transition-colors"
            >
              Marketplace
            </a>
          </li>
          <li>
            <a href="#concierge" className="hover:text-white transition-colors">
              Concierge
            </a>
          </li>
          <li>
            <a href="#events" className="hover:text-white transition-colors">
              Events
            </a>
          </li>
          <li>
            <a href="#circle" className="hover:text-white transition-colors">
              MINA Circle
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-serif text-xl mb-8">Support</h4>
        <ul className="space-y-4 text-white/60 font-light">
          <li>
            <a href="#" className="hover:text-white transition-colors">
              FAQ
            </a>
          </li>
          <li>
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              to="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </li>
          <li>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-white/40 text-sm tracking-widest uppercase">
      <p>© 2026 MINA APP. ALL RIGHTS RESERVED.</p>
    </div>
  </footer>
);

const Partners = () => {
  const partners = [
    { name: "Natural Baby Co.", link: "#" },
    { name: "SF Parents Collective", link: "#" },
    { name: "Eco-Chic Boutique", link: "#" },
    { name: "Little Wonders", link: "#" },
    { name: "Green Sprouts", link: "#" },
  ];

  return (
    <section className="py-12 bg-white border-y border-sage/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[10px] uppercase tracking-[0.3em] text-ink/30 font-bold mb-8"
        >
          Our Trusted Partners
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-40 hover:opacity-100 transition-opacity duration-700"
        >
          {partners.map((partner, i) => (
            <a
              key={i}
              href={partner.link}
              className="text-xl md:text-2xl font-serif italic text-ink hover:text-sage transition-colors whitespace-nowrap"
            >
              {partner.name}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const LandingPage = () => (
  <>
    <Hero />
    <Partners />
    <Problem />
    <System />
    <Lifecycle />
    <CircularPath />
    <Community />
    <ConciergeHighlight />
    <Events />
    <Instagram />
    <FinalCTA />
  </>
);

export default function App() {
  return (
    <Router basename="/mina-landingPage-testing2">
      <div className="min-h-screen selection:bg-sage/20 selection:text-sage">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
