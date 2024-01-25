import styled from "styled-components";
import { theme } from "styles";
import { H1Props, H2Props, H3Props, H4Props, H5Props, ParagraphProps } from ".";

export const Heading1 = styled(({ variant = "regular", ...props }: H1Props) => <h1 {...props} />)`
  ${({ variant }) => variant && theme.typography.h1[variant]}
`;

export const Heading2 = styled(({ variant = "regular", ...props }: H2Props) => <h2 {...props} />)`
  ${({ variant }) => variant && theme.typography.h2[variant]}
`;

export const Heading3 = styled(({ variant = "regular", ...props }: H3Props) => <h3 {...props} />)`
  ${({ variant }) => variant && theme.typography.h3[variant]}
`;

export const Heading4 = styled(({ variant = "regular", ...props }: H4Props) => <h4 {...props} />)`
  ${({ variant }) => variant && theme.typography.h4[variant]}
`;

export const Heading5 = styled(({ variant = "regular", ...props }: H5Props) => <h5 {...props} />)`
  ${({ variant }) => variant && theme.typography.h5[variant]}
`;

export const Heading6 = styled(({ variant = "regular", ...props }: H5Props) => <h5 {...props} />)`
  ${({ variant }) => variant && theme.typography.h6[variant]}
`;

export const Paragraph = styled(({ variant = "regular", ...props }: ParagraphProps) => (
  <p {...props} />
))`
  ${({ variant }) => variant && theme.typography.p[variant]}
`;
