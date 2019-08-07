import React, { Component } from "react";

const defaultScrollOpts: ScrollIntoViewOptions = {
  behavior: "smooth",
  block: "center"
};
interface IProps {
  children: JSX.Element[] | JSX.Element;
  traceProp?: any;
  scroll?: boolean;
  style?: any;
  className?: string;
  scrollOpts?: ScrollIntoViewOptions;
}
export default class ScrollIntoView extends Component<IProps> {
  selfRef: React.RefObject<HTMLDivElement>;
  static defaultProps: Partial<IProps> = {
    scroll: true,
    scrollOpts: {},
    className: ""
  };

  constructor(props: IProps) {
    super(props);
    this.selfRef = React.createRef();
  }

  componentDidMount() {
    this.scrollIntoView();
  }

  componentDidUpdate(oldProps: IProps) {
    const { scroll, traceProp } = this.props;
    // if new props are different, trigger scrollInto view again
    if (oldProps.traceProp !== traceProp || oldProps.scroll !== scroll) {
      this.scrollIntoView();
    }
  }
  render() {
    const { style, className, children } = this.props;

    return (
      <div ref={this.selfRef} style={style} className={`${className} w-100`}>
        {children}
      </div>
    );
  }

  scrollIntoView() {
    const { scroll, scrollOpts } = this.props;
    const self = this.selfRef.current;

    scroll &&
      self &&
      self.scrollIntoView({ ...defaultScrollOpts, ...scrollOpts });
  }
}
