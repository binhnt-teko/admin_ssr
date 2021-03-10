import { PortModel } from '@projectstorm/react-diagrams-core';
import { CustomLinkModel } from './CustomLinkModel';
import v4 from 'uuid';
export class CustomPortModel extends PortModel {
  constructor(name: string, type: string, key: string) {
    super({
      type: 'custom',
      name: v4(),
      extras: { name: name, type: type, key: key},
    });

  }
  link(target: CustomPortModel) {
    let link = new CustomLinkModel();
    this.reportPosition();
    target.reportPosition();
    link.setSourcePort(this);
    link.setTargetPort(target);

    return link;
  }
  createLinkModel() {
    let link = new CustomLinkModel();
    return link;
  }
}
