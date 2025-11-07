% GNU Octave / Matlab
% Define the range and grid points for x and y
x = linspace(-5, 5, 100);
y = linspace(-5, 5, 100);
[X, Y] = meshgrid(x, y);

% Define the function z = f(x,y)
Z = sin(sqrt(X.^2 + Y.^2));

% Create the surface plot
surf(X, Y, Z);

% Label axes and title
xlabel('x-axis');
ylabel('y-axis');
zlabel('z-axis');
title('3D Surface Plot z = sin(sqrt(x^2 + y^2))');
