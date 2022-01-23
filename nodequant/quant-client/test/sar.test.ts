import { Ticket } from '../src/utils'
import { Sar } from '../src/Sar'

const ticks: Ticket[] = [
    { openPrice: 3755.74, highPrice: 3836.86, lowPrice: 3643.25, closePrice: 3790.55, preClosePrice: 0, lastPrice: 0, increase: 0, decrease: 0, volume: 0},
    { openPrice: 3766.57, highPrice: 3766.57, lowPrice: 3542.73, closePrice: 3546.20, preClosePrice: 0, lastPrice: 0, increase: 0, decrease: 0, volume: 0},
    { openPrice: 3543.13, highPrice: 3576.17, lowPrice: 3371.75, closePrice: 3507.31, preClosePrice: 0, lastPrice: 0, increase: 0, decrease: 0, volume: 0},
    { openPrice: 3488.31, highPrice: 3513.55, lowPrice: 3334.02, closePrice: 3340.81, preClosePrice: 0, lastPrice: 0, increase: 0, decrease: 0, volume: 0},
    { openPrice: 3337.26, highPrice: 3529.75, lowPrice: 3314.75, closePrice: 3529.60, preClosePrice: 0, lastPrice: 0, increase: 0, decrease: 0, volume: 0},
    { openPrice: 3558.21, highPrice: 3756.17, lowPrice: 3558.21, closePrice: 3717.41, preClosePrice: 0, lastPrice: 0, increase: 0, decrease: 0, volume: 0},
    { openPrice: 3715.22, highPrice: 3717.17, lowPrice: 3517.79, closePrice: 3544.35, preClosePrice: 0, lastPrice: 0, increase: 0, decrease: 0, volume: 0},
    { openPrice: 3548.77, highPrice: 3572.62, lowPrice: 3447.90, closePrice: 3478.14, preClosePrice: 0, lastPrice: 0, increase: 0, decrease: 0, volume: 0},
    { openPrice: 3495.83, highPrice: 3612.43, lowPrice: 3494.39, closePrice: 3612.08, preClosePrice: 0, lastPrice: 0, increase: 0, decrease: 0, volume: 0},
    { openPrice: 3653.30, highPrice: 3744.89, lowPrice: 3653.30, closePrice: 3704.74, preClosePrice: 0, lastPrice: 0, increase: 0, decrease: 0, volume: 0},
    { openPrice: 3704.74, highPrice: 3779.56, lowPrice: 3665.87, closePrice: 3757.78, preClosePrice: 0, lastPrice: 0, increase: 0, decrease: 0, volume: 0},
    { openPrice: 3741.45, highPrice: 3803.72, lowPrice: 3711.96, closePrice: 3790.89, preClosePrice: 0, lastPrice: 0, increase: 0, decrease: 0, volume: 0},
    { openPrice: 3798.84, highPrice: 3877.43, lowPrice: 3782.43, closePrice: 3841.74, preClosePrice: 0, lastPrice: 0, increase: 0, decrease: 0, volume: 0},
    { openPrice: 3841.74, highPrice: 3891.81, lowPrice: 3806.58, closePrice: 3849.96, preClosePrice: 0, lastPrice: 0, increase: 0, decrease: 0, volume: 0},
    { openPrice: 3888.33, highPrice: 3905.10, lowPrice: 3660.86, closePrice: 3660.96, preClosePrice: 0, lastPrice: 0, increase: 0, decrease: 0, volume: 0},
    { openPrice: 3667.02, highPrice: 3759.33, lowPrice: 3591.34, closePrice: 3759.11, preClosePrice: 0, lastPrice: 0, increase: 0, decrease: 0, volume: 0},
    { openPrice: 3762.69, highPrice: 3762.69, lowPrice: 3621.10, closePrice: 3621.21, preClosePrice: 0, lastPrice: 0, increase: 0, decrease: 0, volume: 0},
    { openPrice: 3628.88, highPrice: 3701.30, lowPrice: 3512.07, closePrice: 3593.15, preClosePrice: 0, lastPrice: 0, increase: 0, decrease: 0, volume: 0},
    { openPrice: 3595.89, highPrice: 3618.08, lowPrice: 3408.03, closePrice: 3446.13, preClosePrice: 0, lastPrice: 0, increase: 0, decrease: 0, volume: 0},
    { openPrice: 3438.09, highPrice: 3570.59, lowPrice: 3349.06, closePrice: 3570.05, preClosePrice: 0, lastPrice: 0, increase: 0, decrease: 0, volume: 0},
    { openPrice: 3580.29, highPrice: 3703.59, lowPrice: 3544.93, closePrice: 3701.78, preClosePrice: 0, lastPrice: 0, increase: 0, decrease: 0, volume: 0},
    { openPrice: 3700.20, highPrice: 3785.36, lowPrice: 3693.95, closePrice: 3724.46, preClosePrice: 0, lastPrice: 0, increase: 0, decrease: 0, volume: 0},
    { openPrice: 3726.13, highPrice: 3857.34, lowPrice: 3704.23, closePrice: 3851.16, preClosePrice: 0, lastPrice: 0, increase: 0, decrease: 0, volume: 0},
]

const sar = new Sar(ticks[0]);


it('updates sequentially', () => {
    for (let i = 1; i < ticks.length; i++) {
        sar.update(ticks[i]);
    }

    expect(sar.value).toBeCloseTo(3359.226)
})
