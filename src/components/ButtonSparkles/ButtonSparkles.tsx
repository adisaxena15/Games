import React, {useEffect} from "react";
import { useState, FC } from "react";
import { motion } from "framer-motion";
import { buttonAnim, highlightContainerAnim, highlightAnim, labelAnim } from "./sparkles.anim.tsx";
import Sparkles from "./Sparkles";
import Stars from "./Stars";
import { ButtonProps } from "./Button.d.tsx";
import S from "./Button.module.css";
const ButtonSparkles: FC<ButtonProps> = ({handleClick, hueValue = 0, ...rest }: ButtonProps) => {
  const [hover, setHover] = useState<boolean>(false);
  const [sparkles] = useState<number[]>(Array(30).fill(0));
  return (
    <div style={{ position: "absolute", top: "20%",
        left: "10%"  }}>
      <Sparkles sparkles={sparkles}/>
      <motion.button
        {...rest}
        variants={buttonAnim}
        initial="init"
        animate={hover? "anim" : "init"}
        whileTap="tap"
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        className={S.btn}
        type="button"
        style={{ filter: `hue-rotate(${hueValue}deg)`}}
        onClick={handleClick}
      >
        <motion.div
          data-testid="highlight"
          variants={highlightContainerAnim}
          className={S.highlightContainer}
          animate={hover? "anim" : "init"}
        >
          <motion.div variants={highlightAnim} className={S.highlight}></motion.div>
        </motion.div>
        {<Stars hover={hover} />}
        <motion.span variants={labelAnim}>Hint</motion.span>
      </motion.button>
    </div>
  );
};

export default ButtonSparkles;