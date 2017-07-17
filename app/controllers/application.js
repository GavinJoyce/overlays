import Em from 'ember';

export default Em.Controller.extend({
  actions: {
    showOverlay(overlay) {
      overlay.actions.open();
    },

    showOverlayGlobally() {
      //NOTE: a quick hack to demonstrate that we could wrap this in a service  with a nice API
      let owner = Em.getOwner(this);
      let viewRegistry = owner.lookup('-view-registry:main');

      Object.keys(viewRegistry).forEach((viewKey) => {
        let view = viewRegistry[viewKey];
        if(view._debugContainerKey === 'component:basic-dropdown') {
          let publicApi = view.get('publicAPI');
          publicApi.actions.open();
        }
      });
    }
  }
});
