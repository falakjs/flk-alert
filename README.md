# Flk Alert

A confirm component to replace the `confirm` browser function. 

# Installation
`flk install flk-alert`

# Usage

`hello-world.component.html`

```html
<button (click)="this.suspendUser = true">Suspend user</button>

<flk-alert *if="this.suspendUser" message="Are you sure you want to suspend this user?" (close)="this.suspendUser = false" (confirm)="this.performUserSuspension()"></flk-alert>
```

Use the `*if` directive to decide when to activate the component.

When the user clicks on `cancel` the `close` event is triggered, in that case we will set the `suspendUser` property back to `null`.

If users click on `confirm` button, then the `confirm` event is triggered followed by `close` event as well.

## Available attributes

### type

**name**: `type` | `[type]`

**values**: `confirm` | `inform`

**default**: `confirm`

The `confirm` type will set two buttons, one for confirm and one for cancel, while the `inform` type has only one `confirm` button.

### message

**name**: `message` | `[message]`

**default**: `Are you sure?`

Set the message `body` that will appear to the user.

### heading

**name**: `heading` | `[heading]`

**default**: `A confirm message`

Set the message `heading` that will appear on the top of the alert box.


### Confirm button
**name**: `confirm-btn` | `[confirm-btn]`

**default**: `OK`

Set the `confirm` button text.


### Cancel button

**name**: `cancel-btn` | `[cancel-btn]`

**default**: `Cancel`

Set the `cancel` button text.

### Input 

**name**: `[with-input]`

**default**: `false`

If set to true, the user will have an input to enter a value.

### Input placeholder

**name**: `placeholder` | `[placeholder]`

**default**: `''`

Set the input placeholder, if the [Input](#input) is set to true.

> If set to true, the `confirm` event will pass the `input value` as well.

### Heading theme
**name**: `heading-theme` | `[heading-theme]`

**default**: `danger`

**Available options**: `danger` | `primary` | `success`

Set the input placeholder, if the [Input](#input) is set to true.