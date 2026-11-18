import { useState } from "react";
import "./style.css";

const products = [
  { name: "Daily Face Wash", desc: "A fresh start, morning and night.", price: "₹499", tag: "Daily essential", image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=85" },
  { name: "Vitamin C Serum", desc: "Your daily dose of brightness.", price: "₹799", tag: "New launch", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=85" },
  { name: "Hydra Moisturizer", desc: "Comfortable hydration, no fuss.", price: "₹649", tag: "Daily essential", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=85" },
  { name: "Daily Sunscreen SPF 50", desc: "Make sun care part of the plan.", price: "₹699", tag: "Everyday shield", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=85" },
];

const journal = [
  { image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=85", title: "The no-fuss guide to building a skincare routine", desc: "Start with the basics. Learn what a simple everyday routine can look like." },
  { image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=900&q=85", title: "What does your skin type actually mean?", desc: "A quick introduction to understanding your skin and its needs." },
  { image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=900&q=85", title: "Ingredients, explained in plain language", desc: "Get to know the ingredients you'll see in everyday skincare." },
];

export default function App() {
  const [bagCount, setBagCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState("");

  function notify(message) {
    setToast(message);
    window.clearTimeout(window.__bareToastTimer);
    window.__bareToastTimer = window.setTimeout(() => setToast(""), 2600);
  }

  function addToBag(name) {
    setBagCount((count) => count + 1);
    notify(`${name} added to your demo bag.`);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <div className="announcement">A little more you. A little less fuss. &nbsp; | &nbsp; Free shipping on orders above ₹999*</div>
      <header className="nav">
        <button className="menu" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <a className="brand" href="#home" onClick={closeMenu}>BARE<small>BE REAL, BE BARE.</small></a>
        <nav className={`navlinks ${menuOpen ? "open" : ""}`}>
          <a href="#shop" onClick={closeMenu}>Shop</a>
          <a href="#story" onClick={closeMenu}>Our story</a>
          <a href="#journal" onClick={closeMenu}>Journal</a>
          <a href="#routine" onClick={closeMenu}>Skin analysis</a>
        </nav>
        <div className="navright">
          <a className="account" href="#account">Account</a>
          <button className="bag" onClick={() => notify("Your bag is ready for something good.")}>Bag ({bagCount})</button>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-content">
            <div className="eyebrow">Skincare, without the noise</div>
            <h1>Good skin.<br />Real you.</h1>
            <p>Thoughtful everyday skincare for men. Straightforward routines, considered ingredients and nothing you don't need.</p>
            <a className="btn" href="#shop">Explore the range <span>↗</span></a>
          </div>
          <div className="hero-note">Made for real life · Made in India</div>
        </section>

        <div className="trust">
          <span>Everyday essentials</span><span>Simple routines</span><span>Ingredient-first</span><span>Made for men</span>
        </div>

        <section className="section" id="shop">
          <div className="section-head">
            <div><div className="kicker">The BARE essentials</div><h2>Your routine starts here.</h2><p className="sub">A few good essentials. An easier way to show up for your skin.</p></div>
            <a className="text-link" href="#shop">Shop all products ↗</a>
          </div>
          <div className="products">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <div className="product-img"><span className="tag">{product.tag}</span><img src={product.image} alt={product.name} /></div>
                <div className="product-info"><h3>{product.name}</h3><p>{product.desc}</p><span className="price">{product.price}</span><button className="add" onClick={() => addToBag(product.name)}>+ Add</button></div>
              </article>
            ))}
          </div>
        </section>

        <section className="story" id="story">
          <div className="story-image" role="img" aria-label="Portrait of a man in natural light" />
          <div className="story-copy">
            <div className="kicker">A little about us</div><h2>Skincare that lets you be you.</h2>
            <p>We believe taking care of your skin shouldn't feel complicated. BARE is built around a simple idea: know what you're putting on your skin, find what works for you, and make it part of everyday life.</p>
            <p>No overcomplicated routines. No unnecessary noise. Just a more considered approach to feeling good in your skin.</p>
            <a className="btn" href="#routine">Get to know your skin ↗</a>
          </div>
        </section>

        <section className="routine" id="routine">
          <div className="kicker routine-kicker">Your skin, your starting point</div>
          <h2>Not sure what your skin needs?</h2>
          <p>Answer a few simple questions about your skin type and concerns. We’ll help you explore a routine to get started.</p>
          <a className="btn" href="mailto:hello@bare.example?subject=BARE%20Skin%20Analysis">Discover your routine <span>↗</span></a>
          <p className="disclaimer">Cosmetic guidance only — not a medical diagnosis.</p>
        </section>

        <section className="section reviews">
          <div className="kicker">The good word</div><h2>Real routines. Real people.</h2>
          <p className="sub review-sub">A little love from the BARE community.</p>
          <div className="review-grid">
            <article className="review"><div className="stars">★★★★★</div><blockquote>“Finally, a routine that doesn't take over my morning.”</blockquote><small>— A BARE customer</small></article>
            <article className="review"><div className="stars">★★★★★</div><blockquote>“Simple products, easy to understand. That's what I wanted.”</blockquote><small>— A BARE customer</small></article>
            <article className="review"><div className="stars">★★★★★</div><blockquote>“The whole approach feels refreshingly straightforward.”</blockquote><small>— A BARE customer</small></article>
          </div>
        </section>

        <section className="section" id="journal">
          <div className="section-head">
            <div><div className="kicker">The skincare journal</div><h2>Know a little more.</h2><p className="sub">Straightforward notes to help make sense of your skin.</p></div>
            <a className="text-link" href="#journal">Explore journal ↗</a>
          </div>
          <div className="journal">
            {journal.map((item) => <article key={item.title}><div className="journal-img" style={{ backgroundImage: `url("${item.image}")` }} /><h3>{item.title}</h3><p>{item.desc}</p><a className="text-link" href="#routine">Read the guide ↗</a></article>)}
          </div>
        </section>

        <section className="newsletter">
          <div><div className="kicker">Stay in the know</div><h2>Good things, occasionally.</h2><p>New launches, useful skin notes and a little BARE inspiration.</p></div>
          <form className="signup" onSubmit={(event) => { event.preventDefault(); notify("Thanks — newsletter demo signup received!"); event.currentTarget.reset(); }}>
            <input type="email" placeholder="Your email address" aria-label="Your email address" required />
            <button type="submit">Sign me up ↗</button>
          </form>
        </section>
      </main>

      <footer className="footer" id="account">
        <div className="footer-top">
          <div><a className="brand" href="#home">BARE<small>BE REAL, BE BARE.</small></a><p>Thoughtful everyday skincare for men. Be real, be bare.</p></div>
          <div><h4>Explore</h4><a href="#shop">Shop all</a><a href="#story">Our story</a><a href="#journal">Skincare journal</a><a href="#routine">Skin analysis</a></div>
          <div><h4>Help</h4><a href="mailto:hello@bare.example">Contact us</a><a href="#faqs">FAQs</a><a href="#shipping">Shipping & delivery</a><a href="#returns">Returns & refunds</a></div>
          <div><h4>Say hello</h4><a href="mailto:hello@bare.example">hello@bare.example</a><a href="#instagram">Instagram ↗</a><a href="#whatsapp">WhatsApp ↗</a></div>
        </div>
        <div className="copyright"><span>© 2026 BARE. All rights reserved.</span><span>Privacy · Terms · Made with intention in India</span></div>
      </footer>
      <div className={`toast ${toast ? "show" : ""}`} role="status" aria-live="polite">{toast}</div>
    </>
  );
}
