import { CheckCircle, Copy } from "react-feather";

import LinkStyledButton from "../LinkStyledButton";
import React from "react";
import styled from "styled-components";
import useCopyClipboard from "../../hooks/useCopyClipboard";

const CopyIcon = styled(LinkStyledButton)`
  // color: ${({ theme }) => theme.text3};
  flex-shrink: 0;
  display: flex;
  text-decoration: none;
  font-size: 0.825rem;
  :hover,
  :active,
  :focus {
    text-decoration: none;
    // color: ${({ theme }) => theme.text2};
  }
`;
const TransactionStatusText = styled.span`
  margin-left: 0.25rem;
  font-size: 0.825rem;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

export default function CopyHelper(props: {
  toCopy: string;
  children?: React.ReactNode;
}): any {
  const [isCopied, setCopied] = useCopyClipboard();

  return (
    <CopyIcon onClick={() => setCopied(props.toCopy)}>
      {isCopied ? (
        <TransactionStatusText>
          <CheckCircle size={"16"} />
          <TransactionStatusText>Copied</TransactionStatusText>
        </TransactionStatusText>
      ) : (
        <TransactionStatusText>
          <Copy size={"16"} />
        </TransactionStatusText>
      )}
      {isCopied ? "" : props.children}
    </CopyIcon>
  );
}
