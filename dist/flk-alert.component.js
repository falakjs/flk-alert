class FlkAlert {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor() {
    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.display = true;
        this.inputValue = this.inputs.getOption('value', '');
        this.type = this.inputs.getOption('type', 'confirm');
        this.withInput = this.inputs.getProp('withInput', false);
        this.confirmBtn = this.inputs.getOption('confirmBtn', 'OK');
        this.closeBtn = this.inputs.getOption('closeBtn', 'Cancel');
        this.message = this.inputs.getOption('message', 'Are you sure?');
        this.inputPlaceholder = this.inputs.getOption('placeholder', '');
        this.heading = this.inputs.getOption('heading', 'A confirm message');
        this.headingTheme = this.inputs.getOption('headingTheme', 'danger');
    }

    /**
     * {@inheritdoc}
     */
    close() {
        this.display = false;
        this.inputs.getEvent('close')();
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    confirm() {
        this.inputs.getEvent('confirm')(this.inputValue);

        this.close();
    }
}