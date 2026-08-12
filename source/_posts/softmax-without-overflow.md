---
title: 实现一个不溢出的 softmax
date: 2026-03-14
tags: [ml, notes]
excerpt: log-sum-exp 技巧，讲清楚
math: true
---

朴素的 softmax 只有三行，外加一个 bug：

$$ \mathrm{softmax}(x_i) = \frac{e^{x_i}}{\sum_j e^{x_j}} $$

喂给它一个 `1000` 的 logit，`exp(1000)` 在 float64 里是 `inf`。`inf / inf` 得到 `nan`。loss 变成 `nan`，梯度变成 `nan`，这次训练就结束了。

## 修法

指数之前先减掉最大值。因为对任意常数 $m$：

$$ \frac{e^{x_i - m}}{\sum_j e^{x_j - m}} = \frac{e^{x_i} / e^{m}}{\sum_j e^{x_j} / e^{m}} = \mathrm{softmax}(x_i) $$

取 $m = \max_j x_j$，数学上不改变任何东西，同时保证最大的指数项是 $e^0 = 1$。

```python
def softmax(x):
    m = max(x)
    e = [math.exp(v - m) for v in x]
    s = sum(e)
    return [v / s for v in e]
```

## 为什么必须减最大值

减任意常数都正确，减最大值才安全。平移之后每项都 $\le 0$，所以每个指数都在 $(0, 1]$ 里——不会溢出；分母至少是 $1$，除法也不会爆。

> 这个技巧不是"把数字变小"。
> 是"把最大的数字恰好变成零"。

## log 空间的版本

处理 log 概率时（交叉熵、beam search）你要的是 `logsumexp`：

$$ \mathrm{LSE}(x) = m + \log \sum_j e^{x_j - m} $$

同样的平移，同样的理由。每个正经的数值计算库都实现了它，它存在的原因就是这个坑。

## 结论

softmax 溢出是每个人的必经之路。修法只有一行——`x - max(x)`——而它成立的原因是 softmax 对平移不变。一旦看到这个不变性，你就再也不会写朴素版本了。
