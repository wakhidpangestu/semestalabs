import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Services } from '../sections/Services';
import { Projects } from '../sections/Projects';
import { UseCases } from '../sections/UseCases';
import { WhyUs } from '../sections/WhyUs';
import { TechStack } from '../sections/TechStack';
import { CTA } from '../sections/CTA';

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <UseCases />
      <WhyUs />
      <TechStack />
      <CTA />
    </>
  );
}
