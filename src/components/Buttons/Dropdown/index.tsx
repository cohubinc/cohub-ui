import React, { Component, CSSProperties } from 'react';

import Text from '../../Typography';
import Icon from '../../Icon';
import Color from '../../../definitions/enums/Color';

import Blank from '../Blank';

import './Dropdown.scss';
import AnimateHeight from 'react-animate-height';

interface IOption {
  onClick: () => void;
  label: string;
}
interface IProps {
  options: IOption[];
  style?: CSSProperties;
  className?: string;
  disabled?: boolean;
  width?: string | number;
  backgroundColor?: Color;
}
interface IState {
  expanded: boolean;
  selectedOption: IOption;
}

export default class Dropdown extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      expanded: false,
      selectedOption: props.options[0],
    };
  }

  render() {
    const {
      style,
      className = '',
      width,
      disabled,
      options,
      backgroundColor = Color.primary,
    } = this.props;
    const {
      selectedOption: { onClick, label },
      expanded,
    } = this.state;

    const cursor = disabled ? 'default' : 'pointer';

    return (
      <div
        className={`CohubDropdownButton relative ${className}`}
        style={{ width, ...style }}
      >
        <div>
          <div
            className="flex bd-radius"
            style={{
              padding: 2,
              backgroundColor: backgroundColor as any,
              opacity: disabled ? 0.45 : 1,
            }}
          >
            <div className="w-100">
              <Blank
                style={{
                  backgroundColor: 'transparent',
                  padding: '6px 33px',
                  width: '100%',
                  cursor,
                }}
                onClick={onClick}
                disabled={disabled}
              >
                <div className="text-center">
                  <Text light style={{ whiteSpace: 'nowrap' }}>
                    {label}
                  </Text>
                </div>
              </Blank>
            </div>

            <div
              className="flex justify-center items-center"
              style={{
                width: 35,
                borderLeft: `1px solid ${Color.trueWhite}`,
                paddingLeft: 1,
                cursor,
              }}
              onClick={this.toggleOptions}
            >
              <Icon.ChevronDown color={Color.trueWhite} />
            </div>
          </div>
        </div>

        {/* OPTIONS */}
        <AnimateHeight
          height={expanded ? 'auto' : 0}
          style={{ position: 'absolute', width: '100%', zIndex: 2 }}
        >
          <div className="flex justify-center items-center">
            <div
              className="bd-radius mt-1 w-100"
              style={{
                boxShadow:
                  '0 4px 20px rgba(0,0,0,0.19), 0px 0px 6px rgba(0,0,0,0.23)',
                backgroundColor: Color.trueWhite as any,
              }}
              data-qa="cohub-dropdown-button"
            >
              <ul
                className="p-0"
                style={{
                  maxHeight: '50vh',
                  listStyle: 'none',
                  overflowY: 'auto',
                }}
              >
                {options
                  .filter(option => option.label !== label)
                  .map(option => (
                    <li
                      key={option.label}
                      className="cursor-pointer"
                      style={{ padding: '.25rem .5rem' }}
                      onClick={() =>
                        this.setState({
                          selectedOption: option,
                          expanded: false,
                        })
                      }
                    >
                      {option.label}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </AnimateHeight>
      </div>
    );
  }

  private toggleOptions = () =>
    this.setState(({ expanded }) => ({ expanded: !expanded }));
}
