import { About } from '../sections/About';
import { WhyUs } from '../sections/WhyUs';

export function AboutPage() {
  return (
    <div className="pt-20">
      <About showFounderCard={true} />
      <WhyUs />
    </div>
  );
}
