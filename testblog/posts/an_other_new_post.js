var postName = "an_other_new_post";
var content = $("<div>", {class : "postcontent"}).appendTo($("#" + postName).parent());

var eq1 = (function () {/*
$$s(t) = a\sin \left( {\omega t + \varphi } \right)$$
*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];

var eq2 = (function () {/*
\[{\sin (u + v) = \sin (u)\cos (v) + \cos (u)\sin (v)}\]
*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];

var eq3 = (function () {/*
$$s(t) = \underbrace {a\cos (\varphi )}_I\sin (\omega t) + \underbrace {a\sin (\varphi )}_Q\cos (\omega t)$$
*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];

var eq4 = (function () {/*
$$\left\{ \begin{array}{l}
I = a\cos (\varphi )\\
Q = a\sin (\varphi )
\end{array} \right.$$
*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];

var eq5 = (function () {/*
$$\left\{ \begin{array}{l}
a = \sqrt {{I^2} + {Q^2}} \\
\varphi  = \arctan \left( {\frac{Q}{I}} \right)
\end{array} \right.$$
*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];


content.append("Consider a general sine shaped signal $s(t)$ with amplitude $a$, angular velocity $\\omega$ and phase $\\varphi$");
content.append(eq1);
content.append("Using the trigonometric identity");
content.append(eq2);
content.append("one gets");
content.append(eq3);
content.append("defining $I$ and $Q$ as shown in the equation gives the relations");
content.append(eq4);
content.append("and");
content.append(eq5);
content.append("<p>First of all these relation illustrates that there are two different ways of representing the signal $s(t)$. Both using two free parameters (assuming that $\\omega$ is constant). Either the pair ($a$,$\\varphi$) or the pair ($I$,$Q$). ");
content.append("<p>Secondly they show that $s(t)$ can easily be generated by adding two very simple signals $I\\sin (\\omega t)$ and $Q\\cos (\\omega t)$. The reason why the letters $I$ and $Q$ are used is related to this. $I$ stands for in-phase and $Q$ for quadrature. When $\\varphi=0$ the in-phase signal is in phase with $s(t)$(both are then a constant times $\\sin (\\omega t)$), and the quadrature signal is 90 degrees (quarter of a wavelength) out of phase with $s(t)$.");
content.append("<p>Thirdly they show that the relation between ($I$,$Q$) and ($a$,$\\varphi$) can be nicely illustrated with the following picture");