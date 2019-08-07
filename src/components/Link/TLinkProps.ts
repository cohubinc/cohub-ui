import { LinkProps as ReactRouterLinkProps } from "react-router-dom";
import { DetailedHTMLProps, AnchorHTMLAttributes, HTMLAttributes } from "react";

interface ILinkProps {
  /** External hyperlink reference */
  href?: string;

  /** A link can be blue and animated. */
  styled?: boolean;

  /** A link can have Elliot's fancy link animation applied to it.
   * Defaults to true if styled prop is true.
   */
  animated?: boolean;

  to?: ReactRouterLinkProps["to"];
}

export type TLinkProps = ILinkProps &
  Omit<ReactRouterLinkProps, "to"> &
  Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
    "ref"
  >;
