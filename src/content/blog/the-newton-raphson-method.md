---
title: The Newton Raphson Method
description: What is the Newton Raphson Method and how do you use it?
pubDate: May 15 2026
heroImage: /uploads/blog-head-newton-raphson-method.png
tags:
  - Numerical Methods
---
## Newton Raphson Method: Finding Roots with Calculus

The **[Newton Raphson Method](https://en.wikipedia.org/wiki/Newton%27s_method)** is one of the most powerful and widely used numerical techniques for finding the roots of equations.

A **root** (or zero) of a function is a value of $x$ such that:

$$
f(x) = 0
$$

When equations become too difficult to solve algebraically, the Newton-Raphson method provides a fast and elegant way to approximate the solution using calculus.

## What Is the Newton Raphson Method?

The Newton-Raphson method starts with an initial guess $x_0$ and repeatedly improves that guess by using the tangent line to the function.

This creates a sequence of increasingly accurate approximations:

$$
x_0,\ x_1,\ x_2,\ x_3,\ \dots
$$

Under the right conditions, the method converges extremely quickly to the true root.

## The Newton Raphson Formula

$$
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}
$$

Where:

* $x_n$ is the current approximation.
* $x_{n+1}$ is the next approximation.
* $f(x_n)$ is the value of the function at $x_n$.
* $f'(x_n)$ is the derivative, or the slope of the tangent line.

## Why This Formula Works

At the current estimate $x_n$, we draw the tangent line to the graph of the function.

The tangent line equation is:

$$
y = f(x_n) + f'(x_n)(x - x_n)
$$

To estimate the root, we find where this tangent line crosses the x-axis by setting $y = 0$:

$$
0 = f(x_n) + f'(x_n)(x - x_n)
$$

Solving for $x$ gives:

$$
x = x_n - \frac{f(x_n)}{f'(x_n)}
$$

This becomes the update formula used in the Newton-Raphson method.

## Step by Step Algorithm

1. Define the function $f(x)$.
2. Compute its derivative $f'(x)$.
3. Choose an initial guess $x_0$.
4. Calculate the next approximation using the Newton-Raphson formula.
5. Repeat until the estimates stop changing significantly.

A common stopping condition is:

$$
|x_{n+1} - x_n| < 10^{-6}
$$

**Example: Finding $\sqrt{2}$**

To compute $\sqrt{2}$, we solve:

$$
x^2 - 2 = 0
$$

**Step 1: Define the Function**

$$
f(x) = x^2 - 2
$$

**Step 2: Compute the Derivative**

$$
f'(x) = 2x
$$

**Step 3: Substitute into the Formula**

$$
x_{n+1} = x_n - \frac{x_n^2 - 2}{2x_n}
$$

**Step 4: Choose an Initial Guess**

Let:

$$
x_0 = 1.5
$$

<figure>
  <img
    src="/uploads/newton-rasphson-method_tangents.png"
    alt="Successive tangent lines converging to the root of x² - 2"
    loading="lazy"
  />
  <figcaption>
    Figure 1: Successive tangent lines converging to the root of $x^2 - 2$.
  </figcaption>
</figure>

**Iteration 1**

$$
x_1 = 1.5 - \frac{1.5^2 - 2}{2(1.5)}
$$

$$
x_1 = 1.4166666667
$$

**Iteration 2**

$$
x_2 = 1.4166666667 - \frac{1.4166666667^2 - 2}{2(1.4166666667)}
$$

$$
x_2 \approx 1.4142156863
$$

**Iteration 3**

$$
x_3 \approx 1.4142135624
$$

## Final Answer

$$
\sqrt{2} \approx 1.4142135624
$$

The actual value is:

$$
\sqrt{2} = 1.414213562373095\ldots
$$

After only three iterations, the approximation is accurate to many decimal places.

## Iteration Table

| Iteration | Approximation |
| --------- | ------------- |
| $x_0$     | 1.5000000000  |
| $x_1$     | 1.4166666667  |
| $x_2$     | 1.4142156863  |
| $x_3$     | 1.4142135624  |

## Advantages of the Newton-Raphson Method

* Extremely fast convergence near the root.
* Simple formula to implement.
* Widely used in mathematics, engineering, and computer science.
* Forms the basis of many scientific computing algorithms.

## Limitations

The method can fail if:

* The derivative is zero or very close to zero.
* The initial guess is too far from the root.
* The function is not smooth.
* The iterations diverge instead of converging.

Because of this, choosing a reasonable starting point is important.

## Python Implementation

```python
def newton_raphson(f, df, x0, tol=1e-6, max_iter=100):
    x = x0

    for i in range(max_iter):
        x_new = x - f(x) / df(x)

        if abs(x_new - x) < tol:
            return x_new

        x = x_new

    return x


# Example: sqrt(2)
f = lambda x: x**2 - 2
df = lambda x: 2 * x

root = newton_raphson(f, df, 1.5)
print(root)  # 1.4142135623730951
```
