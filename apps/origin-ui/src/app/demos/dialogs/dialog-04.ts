import { Component, ElementRef, viewChild } from '@angular/core';
import { OriButton } from '@origin-ui/components/button';
import {
    OriDialogComponent,
    OriDialogDescription,
    OriDialogFooter,
    OriDialogHeader,
    OriDialogTitle,
    OriDialogTriggerDirective
} from '@origin-ui/components/dialog';
import { RdxDialogCloseDirective } from '@radix-ng/primitives/dialog';

@Component({
    selector: 'demo-dialog-04',
    imports: [
        OriDialogComponent,
        OriDialogTriggerDirective,
        RdxDialogCloseDirective,
        OriButton,
        OriDialogDescription,
        OriDialogHeader,
        OriDialogTitle,
        OriDialogFooter
    ],
    template: `
        <button [oriDialogTrigger]="dialog" oriButton variant="outline">Terms & Conditions</button>

        <ng-template #dialog>
            <ori-dialog-content
                class="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:top-3.5"
            >
                <ori-dialog-header class="contents space-y-0 text-left">
                    <ori-dialog-title class="border-border border-b px-6 py-4 text-base">
                        Terms & Conditions
                    </ori-dialog-title>
                    <div class="overflow-y-auto" #contentRef (scroll)="handleScroll()">
                        <ori-dialog-description>
                            <div class="px-6 py-4">
                                <div class="[&_strong]:text-foreground space-y-4 [&_strong]:font-semibold">
                                    <div class="space-y-4">
                                        <div class="space-y-1">
                                            <p>
                                                <strong>Acceptance of Terms</strong>
                                            </p>
                                            <p>
                                                By accessing and using this website, users agree to comply with and be
                                                bound by these Terms of Service. Users who do not agree with these terms
                                                should discontinue use of the website immediately.
                                            </p>
                                        </div>

                                        <div class="space-y-1">
                                            <p>
                                                <strong>User Account Responsibilities</strong>
                                            </p>
                                            <p>
                                                Users are responsible for maintaining the confidentiality of their
                                                account credentials. Any activities occurring under a user&lsquo;s
                                                account are the sole responsibility of the account holder. Users must
                                                notify the website administrators immediately of any unauthorized
                                                account access.
                                            </p>
                                        </div>

                                        <div class="space-y-1">
                                            <p>
                                                <strong>Content Usage and Restrictions</strong>
                                            </p>
                                            <p>
                                                The website and its original content are protected by intellectual
                                                property laws. Users may not reproduce, distribute, modify, create
                                                derivative works, or commercially exploit any content without explicit
                                                written permission from the website owners.
                                            </p>
                                        </div>

                                        <div class="space-y-1">
                                            <p>
                                                <strong>Limitation of Liability</strong>
                                            </p>
                                            <p>
                                                The website provides content &ldquo;as is&ldquo; without any warranties.
                                                The website owners shall not be liable for direct, indirect, incidental,
                                                consequential, or punitive damages arising from user interactions with
                                                the platform.
                                            </p>
                                        </div>

                                        <div class="space-y-1">
                                            <p>
                                                <strong>User Conduct Guidelines</strong>
                                            </p>
                                            <ul class="list-disc pl-6">
                                                <li>Not upload harmful or malicious content</li>
                                                <li>Respect the rights of other users</li>
                                                <li>Avoid activities that could disrupt website functionality</li>
                                                <li>Comply with applicable local and international laws</li>
                                            </ul>
                                        </div>

                                        <div class="space-y-1">
                                            <p>
                                                <strong>Modifications to Terms</strong>
                                            </p>
                                            <p>
                                                The website reserves the right to modify these terms at any time.
                                                Continued use of the website after changes constitutes acceptance of the
                                                new terms.
                                            </p>
                                        </div>

                                        <div class="space-y-1">
                                            <p>
                                                <strong>Termination Clause</strong>
                                            </p>
                                            <p>
                                                The website may terminate or suspend user access without prior notice
                                                for violations of these terms or for any other reason deemed appropriate
                                                by the administration.
                                            </p>
                                        </div>

                                        <div class="space-y-1">
                                            <p>
                                                <strong>Governing Law</strong>
                                            </p>
                                            <p>
                                                These terms are governed by the laws of the jurisdiction where the
                                                website is primarily operated, without regard to conflict of law
                                                principles.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ori-dialog-description>
                    </div>
                </ori-dialog-header>
                <ori-dialog-footer class="border-border border-t px-6 py-4 sm:items-center">
                    @if (hasReadToBottom) {
                        <span class="text-muted-foreground grow text-xs max-sm:text-center">
                            Read all terms before accepting.
                        </span>
                    }
                    <button oriButton type="button" variant="outline" rdxDialogClose>Cancel</button>
                    <button [disabled]="!hasReadToBottom" oriButton type="button" rdxDialogClose>I agree</button>
                </ori-dialog-footer>
            </ori-dialog-content>
        </ng-template>
    `
})
export default class Dialog04Component {
    readonly contentRef = viewChild<ElementRef>('contentRef');

    hasReadToBottom = false;

    handleScroll() {
        const content = this.contentRef()?.nativeElement as HTMLElement;

        if (!content) return;

        const scrollPercentage = content.scrollTop / (content.scrollHeight - content.clientHeight);

        if (scrollPercentage >= 0.99 && !this.hasReadToBottom) {
            this.hasReadToBottom = true;
        }
    }
}
