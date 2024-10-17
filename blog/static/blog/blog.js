class ClickButton extends React.Component {
  state = {
    wasClicked: false;
  }

  handleClick() {
    this.setState(
      {
        wasClicked : true;
      }
    )
  }

  render() {
    let buttonText;

    if(this.state.wasClicked)
    {
      buttonText = "clicked";
    } else {
      buttonText = "Click me";
    }
  }

  return React.CreateElement(
    'button',
    {
      className :'btn btn-primary mt-2',
      onClick() => {
        this.handleClick()
      }
    },
    buttonText
  )
}