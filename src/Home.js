import ServiceCard from "./ServiceCard";

function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Welcome to Our Website</h1>
        <p>We create simple websites.</p>
      </section>

      <section>
        <h2>About Us</h2>
        <p>
          We provide web designs and development services.
        </p>
      </section>

      <section>
        <h2>Our Services</h2>

        <ServiceCard
          title="Web Design"
          text="We  create websites."
        />

        <ServiceCard
          title="Web Development"
          text="We build modern websites."
        />

        <ServiceCard
          title="Support"
          text="We provide website support."
        />
      </section>
    </main>
  );
}

export default Home;