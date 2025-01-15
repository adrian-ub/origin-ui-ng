import { Component, signal } from '@angular/core';

import { OriCheckbox } from '@origin-ui/components/checkbox';
import { OriLabel } from '@origin-ui/components/label';

@Component({
    selector: 'demo-checkbox-02',
    imports: [OriCheckbox, OriLabel],
    template: `
        <div class="flex items-center gap-2">
            <ori-checkbox
                class="flex"
                id="checkbox-02"
                [indeterminate]="checked()"
                (checkedChange)="onCheckedChange()"
            />
            <label oriLabel htmlFor="checkbox-02">Indeterminate checkbox</label>
        </div>
    `
})
export default class Checkbox02Component {
    checked = signal(true);

    onCheckedChange() {
        this.checked.set(false);
    }
}
