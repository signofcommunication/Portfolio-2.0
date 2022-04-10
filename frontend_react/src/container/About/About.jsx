import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

function About() {
  return (
    <>
      <h2 className="head-text">About</h2>

      <div className="app_profiles">
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="app__profile-item"
        >
          <div>
            <p>
              Im Jeriko an 16-year-old from Indonesia and im currently sophomore
              at studying Computer Science at MediaInformatika Vocational
              School. You can call me jhvonsky. I have been programming since 5
              years old and i extremely loved it. I learned about endless
              possibilities of computer programs along with enjoyment of
              challenging myself.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
