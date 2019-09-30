import React, { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";

import Avatar from "src/components/Avatar";
import Typography from "src/components/Typography";
import BoxShadow, { ElevationLevel } from "src/definitions/enums/BoxShadow";
import Buttons from "src/components/Buttons";
import Color from "src/definitions/enums/Color";
import useMediaQueries from "src/hooks/useMediaQueries";
import styles from "./Horizontal.module.scss";

export interface IHorizontalCardProps {
  /**
   * The main identifying text
   */
  title: string;
  subtitle?: ReactNode;
  meta?: string;
  titleLink?: string;
  /**
   * An array of objects that each have a name and an action. The action is usually a function, but doesn't have to be
   */
  actions?: Array<{ name: string; action: any; disabled?: boolean }>;
  /**
   * If true, puts the image in a circular element with a slightly inset shadow
   */
  avatar?: boolean;
  /**
   * A url for the card's image
   */
  imageUrl?: string | null;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  /**
   * The level of drop shadow that shows beneath the card
   */
  elevation?: ElevationLevel;
  imgContainerStyle?: CSSProperties;
  imageWidth?: string | number;
}

export default function Horizontal({
  title,
  subtitle,
  meta,
  titleLink,
  actions,
  avatar,
  imageUrl,
  className,
  style,
  children,
  elevation = 1,
  imgContainerStyle,
  imageWidth
}: IHorizontalCardProps) {
  const { isMobile } = useMediaQueries();

  const cardWidth = isMobile ? "100%" : "360px";

  let actionList;

  if (actions) {
    actionList = actions.map(a => {
      return (
        <Buttons.Text
          className={styles.CardAction}
          key={a.name}
          disabled={!!a.disabled}
          onClick={() => a.action()}
          fontSize={12}
          color={Color.iconGrey as any}
        >
          {a.name}
        </Buttons.Text>
      );
    });
  }

  const titleLinkElement = () => {
    if (titleLink) {
      return (
        <Link to={titleLink}>
          <Typography.Large block>{title}</Typography.Large>
        </Link>
      );
    } else {
      return <Typography.Large block>{title}</Typography.Large>;
    }
  };

  const cardContent = (
    <React.Fragment>
      <div className="flex">
        {avatar && <Avatar size={50} src={imageUrl} />}
        {!avatar && imageUrl && (
          <div
            style={{ width: imageWidth, ...imgContainerStyle }}
            className={styles.CardHorizontalImage}
          >
            <img style={{ width: "100%" }} src={imageUrl} />
          </div>
        )}
        <div className="flex ml-1 w-100">
          <div className="ml-1 w-100">
            {titleLinkElement()}
            <Typography block>{subtitle}</Typography>
            {meta && <Typography.Small muted>{meta}</Typography.Small>}
            {children && children}
          </div>
        </div>
      </div>
    </React.Fragment>
  );

  return (
    <div
      className={`${styles.CardHorizontal} ${className}`}
      style={{
        ...style,
        boxShadow: (BoxShadow as any)[`dp${elevation}`] || BoxShadow.dp1,
        width: cardWidth
      }}
    >
      {cardContent}
      {actions && (
        <div className="flex justify-end items-center mt-05">{actionList}</div>
      )}
    </div>
  );
}
