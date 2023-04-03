import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alerts = ({ children }: Props) => {
  return (
    <div>
      <span className="alert alert-primary">{children}</span>
    </div>
  )
}

export default Alerts
