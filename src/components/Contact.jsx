import gsap from "gsap";
import { openingHours, socials } from "../constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .to("#f-left-leaf", {
        y: "50",
        duration: 1,
        ease: "power1.inOut",
      });
  });

  return (
    <footer id="contact">
      <img
        src="https://dmeckers.github.io/gsap-cocktails-demo/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />

      <img
        src="https://dmeckers.github.io/gsap-cocktails-demo/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
      />

      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>32-7, Krūmu street, Liepāja, LV-3405, Latvia</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>(+371) 27-777-777</p>
          <p>example@gmail.com</p>
        </div>

        <div>
          <h3>OpenEvery Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                key={social.name}
                aria-label={social.name}
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
