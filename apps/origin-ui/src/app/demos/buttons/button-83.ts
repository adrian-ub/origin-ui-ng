import { Component } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';
import { LucideAngularModule, X } from 'lucide-angular';

@Component({
    selector: 'demo-button-83',
    imports: [OriButton, LucideAngularModule],
    template: `
        <ori-button variant="secondary">
            <lucide-angular
                class="-ms-1 me-2 opacity-60"
                [img]="X"
                style="display: contents"
                size="16"
                strokeWidth="2"
                aria-hidden="true"
            />
            Button
        </ori-button>
    `
})
export default class Button83Component {
    protected readonly X = X;
}
