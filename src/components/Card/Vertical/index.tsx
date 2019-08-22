import React, { CSSProperties, ReactNode } from "react";
import styles from "./Vertical.module.scss";
import Typography from "src/components/Typography";
import { Link } from "react-router-dom";
import Avatar from "src/components/Avatar";
import BoxShadow, { ElevationLevel } from "src/definitions/enums/BoxShadow";
import { useMediaQuery } from "react-responsive";
import MediaQuery from "src/definitions/enums/MediaQuery";

export interface IVerticalCardProps {
  /**
   * The main identifying text
   */
  title: string;
  /**
   * If true, centers the title, subtitle, and meta text
   */
  centered?: boolean;
  /**
   * If true, formats the title as a link
   */
  titleLink?: string;
  subtitle?: string | ReactNode;
  meta?: string;
  /**
   * An array of objects that each have a name and an action. The action is usually a function, but doesn't have to be
   */
  actions?: Array<{ name: string; action: () => void }>;
  /**
   * A url for the card's image
   */
  imageUrl?: string | null;
  /**
   * If true, puts the image in a circular element with a slightly inset shadow
   */
  avatar?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  /**
   * The level of drop shadow that shows beneath the card
   */
  elevation?: ElevationLevel;
}

export default function Vertical({
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
  centered,
  elevation = 1
}: IVerticalCardProps) {
  const isMobile = useMediaQuery({ query: MediaQuery.mobileMediaQuery });

  const cardWidth = isMobile ? "100%" : "240px";

  const dpLevel = `dp${elevation}` as any;

  let actionList;

  if (actions) {
    actionList = actions.map(a => {
      return (
        <div
          className={styles.CardAction}
          key={a.name}
          onClick={() => a.action()}
        >
          {a.name}
        </div>
      );
    });
  }

  const titleLinkElement = () => {
    if (titleLink) {
      return (
        <Link to={titleLink}>
          <Typography.Large block className={centered ? "text-center" : ""}>
            {title}
          </Typography.Large>
        </Link>
      );
    } else {
      return (
        <Typography.Large block className={centered ? "text-center" : ""}>
          {title}
        </Typography.Large>
      );
    }
  };

  const cardContent = (
    <React.Fragment>
      <div className="m-auto block">
        {avatar && <Avatar size={150} src={imageUrl} className="mt-1" />}
        {!avatar && imageUrl && (
          <div>
            <img src={imageUrl} className="p-1" />
          </div>
        )}
      </div>
      <div className="mx-1 mt-05">
        {titleLinkElement()}
        <Typography.Small
          block
          className={`${centered ? "text-center" : ""} mt-025`}
        >
          {subtitle}
        </Typography.Small>
        {meta && (
          <Typography.Tiny
            muted
            block
            className={`${centered ? "text-center" : ""} mt-025`}
          >
            {meta}
          </Typography.Tiny>
        )}
        {children && <div className="mt-1">{children}</div>}
        {actions && (
          <div className="flex justify-evenly mt-1">{actionList}</div>
        )}
      </div>
    </React.Fragment>
  );

  return (
    <div
      className={`${styles.CardVertical} ${className} pb-1`}
      style={{
        ...style,
        boxShadow: BoxShadow[dpLevel] || BoxShadow.dp1,
        width: cardWidth
      }}
    >
      {cardContent}
    </div>
  );
}
