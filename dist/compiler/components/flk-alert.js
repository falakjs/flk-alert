const Component = require(COMPONENT_CLASS_PATH);

class FlkAlertComponent extends Component {}

module.exports = {
    selector: 'flk-alert',
    isChild: false,
    contentToString: false,
    parseContent: true,
    handler: FlkAlertComponent,
    isUnique: false,
    component: 'FlkAlert',
    htmlFile: __dirname + '/../../flk-alert.component.html',
};