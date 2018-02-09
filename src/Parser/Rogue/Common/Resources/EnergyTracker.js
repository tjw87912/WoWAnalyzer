import RESOURCE_TYPES from 'common/RESOURCE_TYPES';
import Combatants from 'Parser/Core/Modules/Combatants';

import ResourceTracker from 'Parser/Core/Modules/ResourceTracker/ResourceTracker';

class EnergyTracker extends ResourceTracker {
  static dependencies = {
    combatants: Combatants,
  };

  on_initialized() {
    this.resource = RESOURCE_TYPES.ENERGY;
  }
}

export default EnergyTracker;
