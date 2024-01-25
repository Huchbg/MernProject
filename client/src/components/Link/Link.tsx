import { default as _Link, LinkProps as _LinkProps } from "next/link";
import * as S from "./elements";

type HTMLAnchorProps = Omit<
  JSX.IntrinsicElements["a"],
  "href" | "onClick" | "onMouseEnter" | "color" | "ref"
>;

export interface LinkCustomProps {
  ref?: React.Ref<HTMLAnchorElement>;
}

export interface LinkProps
  extends Omit<_LinkProps, "href" | "onTouchStart">,
    HTMLAnchorProps,
    LinkCustomProps {
  href: _LinkProps["href"];
  variant?: "discord";
}

export const Link: React.FC<LinkProps> = ({
  variant,
  children,
  as,
  href,
  replace,
  scroll,
  shallow,
  passHref = true,
  ...props
}) => {
  return (
    <_Link
      as={as}
      href={href as string}
      passHref={passHref}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
    >
      <S.Link {...props} variant={variant}>
        {children}
      </S.Link>
    </_Link>
  );
};
