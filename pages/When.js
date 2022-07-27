import { Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { Theme } from "@mui/material/styles";
import Logo from "../components/Logo";
import styles from "../styles/When.module.css";
import Image from "next/image";
import Link from "next/link";
function When() {
  return (
    <div className={styles.when} >
        <div className={styles.logo}>
            <Logo />
        </div>
      <img className={styles.arrow} src="/assets/Arrow_Left.svg"></img>
      <main className={styles.main}>
        <div className={styles.body}>
          <div className={styles.questionContainer}>
            <div className={styles.question} >First, when do you need care?</div>
          </div>
          <div className={styles.progressContainer}>
            <img
              src="/assets/progress1.svg"
              className={styles.progressBar}
            ></img>
          </div>
          <div className={styles.btnContainer}>
            <IconButton className={styles.button} >
              
              <Image
                src="/assets/clock.svg"
                alt="Herewith Logo"
                width={32}
                height={32}
                role="button"
              />
              <p className={styles.btnText} >Right away</p>
            </IconButton>
            <IconButton className={styles.button} >
              <Image
                src="/assets/calendar.svg"
                alt="Herewith Logo"
                width={32}
                height={32}
                role="button"
              />
              <p className={styles.btnText} >I'm flexible</p>
              
            </IconButton>
          </div>
        </div>
      </main>
      <Box className={styles.btnBox}>
        <Button className={styles.backBtn} fullWidth>
          back
        </Button>
      <Link href={'/FindCaregiver'}>
        <Button className={styles.nextBtn} fullWidth>
          Next
        </Button>
        </Link>
        </Box>
    </div>
  );
}

export default When;
