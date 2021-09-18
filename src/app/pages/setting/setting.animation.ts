import { query, style, transition, trigger } from "@angular/animations";

export const setting = trigger('setting', [
    transition(':leave', query('i', [
        style({
            paddingTop: '5px'
        }),

    ])

    )

])