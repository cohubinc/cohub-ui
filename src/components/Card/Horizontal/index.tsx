import React, { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";

import Avatar from "src/components/Avatar";
import Typography from "src/components/Typography";
import BoxShadow, { ElevationLevel } from "src/definitions/enums/BoxShadow";
import Buttons, { TTextButtonProps } from "src/components/Buttons";
import Color from "src/definitions/enums/Color";
import useMediaQueries from "src/hooks/useMediaQueries";
import styled from "styled-components";

export interface IHorizontalCardProps {
  /**
   * The main identifying text
   */
  title: string;
  subtitle?: ReactNode;
  meta?: string;
  titleLink?: string;
  width?: number | string;
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

const CardHorizontal = styled.div`
  padding: 1rem;
  background-color: ${Color.trueWhite};
  border-radius: var(--default-border-radius);
`;

const CardHorizontalImage = styled.div`
  max-width: 150px;
  max-height: 150px;
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

export default function Horizontal({
  title,
  subtitle,
  meta,
  titleLink,
  actions,
  width = 360,
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

  width = typeof width === "string" ? width : `${width}px`;

  const cardWidth = isMobile ? "100%" : width;

  let actionList;

  if (actions) {
    actionList = actions.map(a => {
      return (
        <CardAction
          key={a.name}
          disabled={!!a.disabled}
          onClick={() => a.action()}
          fontSize={12}
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
        {avatar && (
          <div>
            <Avatar size={50} src={imageUrl} />
          </div>
        )}
        {!avatar && imageUrl && (
          <div>
            <CardHorizontalImage
              style={{ width: imageWidth, ...imgContainerStyle }}
            >
              <img style={{ width: "100%" }} src={imageUrl} />
            </CardHorizontalImage>
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
    <CardHorizontal
      className={className}
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
    </CardHorizontal>
  );
}
