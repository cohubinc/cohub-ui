import React, { CSSProperties, PureComponent, ReactNode } from "react";
import styles from "./Horizontal.module.scss";
import Avatar from "src/components/Avatar";
import Typography from "src/components/Typography";
import { Link } from "react-router-dom";
import BoxShadow, { ElevationLevel } from "src/definitions/enums/BoxShadow";
import Buttons from "src/components/Buttons";
import Color from "src/definitions/enums/Color";

interface IProps {
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
  actions?: Array<{ name: string; action: any }>;
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
}

export default class Horizontal extends PureComponent<IProps> {
  static defaultProps: Partial<IProps> = {
    elevation: 1
  };

  render() {
    const {
      title,
      subtitle,
      meta,
      titleLink,
      imageUrl,
      avatar,
      actions,
      className,
      style,
      children,
      elevation
    } = this.props;

    const dpLevel = `dp${elevation}` as any;

    let actionList;

    if (actions) {
      actionList = actions.map(a => {
        return (
          <Buttons.Text
            className={styles.CardAction}
            key={a.name}
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
        <div className="flex w-100">
          {avatar && <Avatar size={50} src={imageUrl} />}
          {!avatar && imageUrl && (
            <div>
              <img src={imageUrl} className={styles.CardHorizontalImage} />
            </div>
          )}
          <div className="flex w-100 ml-1">
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
        style={{ ...style, boxShadow: BoxShadow[dpLevel] || BoxShadow.dp1 }}
      >
        {cardContent}
        {actions && (
          <div className="flex justify-end items-center mt-05">
            {actionList}
          </div>
        )}
      </div>
    );
  }
}
