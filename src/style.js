const styles = {
  paragraph: "font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[32px]",
  smallParagraph: "font-normal text-[16px] leading-[26px]",
  h1: "font-bold text-[38px] leading-[46px] md:text-[66px] md:leading-[80px] tracking-[-1px]",
  h2: "font-bold text-[28px] leading-[36px] md:text-[42px] md:leading-[55px] ",
  h4: "font-bold text-[18px] leading-[26px] tracking-[0.9px]",
  padding: "p-[24px] md:px-[133px] md:py-[33px]",
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
};

export const layout = {
  section: `${styles.padding} flex`,
};

export default styles;
