import * as React from 'react';

import { ButtonComponent } from './ButtonComponent';

import css from './BidPanelComponent.css';

export interface IPlayerBidPanelProps {
  players: any;
  currentPlayer: any;
  moves: any;
  playerID: string;
}

export class BidPanelComponent extends React.Component<IPlayerBidPanelProps, { bid: number }> {
  constructor(props: any) {
    super(props);
    this.state = { bid: 1 };
  }

  _bid = () => { this.props.moves.MovePlaceBid(this.state.bid); }
  _pass = () => { this.props.moves.MovePassBid(); }
  
  setBidValue = (event: any) => {
    this.setState({bid: event.target.value});
  }

  getCurrentPlayer = () => {
    return this.props.players[this.props.currentPlayer];
  }

  isOutOfMoney = () => {
    return ((this.getCurrentPlayer().bid ?? 0) >= this.getCurrentPlayer().money);
  }

  render() {
    if (this.props.playerID !== this.props.currentPlayer && this.props.playerID !== null){
      return (
        <div className={css.BidPanel}>
          <span>Waiting for the other players to bid...</span>
        </div>
      );
    }

    return (
      <div className={css.BidPanel}>
        <div className={css.ButtonGroup}>
            <ButtonComponent click={this._bid} disabled={this.isOutOfMoney()}>
                Bid
            </ButtonComponent>
            <input type="number" defaultValue={this.state.bid} onChange={this.setBidValue} />
        </div>

        <div className={css.ButtonGroup}>
            <ButtonComponent click={this._pass}>
                Pass
            </ButtonComponent>
        </div>
      </div>
    );
  }
}