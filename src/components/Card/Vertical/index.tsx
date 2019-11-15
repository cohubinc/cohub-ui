import React, { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";

import Typography from "src/components/Typography";
import Avatar from "src/components/Avatar";
import BoxShadow, { ElevationLevel } from "src/definitions/enums/BoxShadow";
import useMediaQueries from "src/hooks/useMediaQueries";
import { Buttons } from "src";
import Color from "src/definitions/enums/Color";
import styled from "styled-components";
import { TTextButtonProps } from "src/components/Buttons";

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
  actions?: Array<{ name: string; action: () => void; disabled?: boolean }>;
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
  width?: number | string;
}

const CardVertical = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Color.trueWhite};
  border-radius: var(--default-border-radius);
  padding-bottom: 1rem;

  img {
    border-top-left-radius: var(--default-border-radius);
    border-top-right-radius: var(--default-border-radius);
  }
`;

const CardAction = styled(Buttons.Text)<TTextButtonProps>`
  transition: 100ms ease-in;

  &:hover {
    color: ${Color.grey800};
  }

  &:not(:last-of-type) {
    margin-right: 0.5rem;
  }
`;

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
  elevation = 1,
  width = "240px"
}: IVerticalCardProps) {
  const { isMobile } = useMediaQueries();

  width = typeof width === "string" ? width : `${width}px`;

  const cardWidth = isMobile ? "100%" : width;

  const dpLevel = `dp${elevation}` as any;

  let actionList;

  if (actions) {
    actionList = actions.map(a => {
      return (
        <CardAction
          key={a.name}
          onClick={() => a.action()}
          fontSize={12}
          disabled={!!a.disabled}
          color={Color.iconGrey as any}
        >
          {a.name}
        </CardAction>
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
            <img style={{ maxWidth: "100%" }} src={imageUrl} className="p-1" />
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
    <CardVertical
      className={className}
      style={{
        ...style,
        boxShadow: (BoxShadow as any)[dpLevel] || BoxShadow.dp1,
        width: cardWidth
      }}
    >
      {cardContent}
    </CardVertical>
  );
}
