import {
  Button,
  Card,
  Icon,
  IconButton,
  SvgIcon,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import Logo from "../components/Logo";
import BudgetSlider from "../components/BudgetSlider";
import styles from "../styles/FindCaregiver.module.css";
import Image from "next/image";

function FindCaregiver() {
  return (
    <div>
      <div className={styles.logo}>
        <Logo />
      </div>
      <Link href={"/When"}>
        <img className={styles.arrow} src="/assets/Arrow_Left.svg"></img>
      </Link>

      <div className={styles.questionContainer}>
        <div className={styles.question}>
          Next, let's find your ideal caregiver
        </div>
      </div>
      <div className={styles.progressContainer}>
        <img src="/assets/progress2.svg" className={styles.progressBar} />
      </div>
      <Card className={styles.card}>
        <Box className={styles.cardHeader}>
          <Icon>
            <img src="assets/Cash.svg"></img>
          </Icon>
          <Typography className={styles.headerType}>
            What's your buget?
          </Typography>
        </Box>
        <Box className={styles.sliderBox}>
          <BudgetSlider />
        </Box>
        <Typography className={styles.memo}>
          {" "}
          This is a typical price range for servies in your area
        </Typography>
      </Card>
      <Card className={styles.card}>
        <Box className={styles.cardHeader}>
          <Icon>
            <img src="assets/Person.svg"></img>
          </Icon>
          <Typography className={styles.headerType}>
            Gender preference
          </Typography>
        </Box>
        <Box className={styles.row} >
        <IconButton className={styles.selectionBtn}>
          <Image
            src="/assets/Male.svg"
            alt="Herewith Logo"
            width={32}
            height={32}
            role="button"
          />
          <Typography className={styles.btnText}>Male</Typography>
        </IconButton>
        <IconButton className={styles.selectionBtn}>
          <Image
            src="/assets/Female.svg"
            alt="Herewith Logo"
            width={32}
            height={32}
            role="button"
          />
          <p className={styles.btnText}>Female</p>
        </IconButton>
        </Box>
        <IconButton className={styles.selectionBtn} fullwidth >No Preference</IconButton>
      </Card>
      <Box className={styles.btnBox}>
        <Button className={styles.backBtn} fullWidth>
          back
        </Button>
        <Link href={"/FindCaregiver"}>
          <Button className={styles.nextBtn} fullWidth>
            Next
          </Button>
        </Link>
      </Box>
    </div>
  );
}

export default FindCaregiver;
