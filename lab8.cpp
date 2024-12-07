#include <iostream>
#include <cmath>
#include <string>
using namespace std;

// Point Class
class Point {
public:
    float x, y, z;
    Point(float x = 0, float y = 0, float z = 0) : x(x), y(y), z(z) {}
    float distanceTo(const Point& other) const {
        return sqrt(pow(x - other.x, 2) + pow(y - other.y, 2) + pow(z - other.z, 2));
    }
};

// Base Shape Class
class Shape {
public:
    string name;
    Shape(string n) : name(n) {}
    void displayBase() {
        cout << "Shape: " << name << endl;
    }
};

// 2D Shape Base Class
class TwoDimensionalShape : public Shape {
public:
    TwoDimensionalShape(string n) : Shape(n) {}
};

// 3D Shape Base Class
class ThreeDimensionalShape : public Shape {
public:
    ThreeDimensionalShape(string n) : Shape(n) {}
};

// Circle Class
class Circle : public TwoDimensionalShape {
    float radius;
public:
    Circle(const Point& center, const Point& circumferencePoint) 
        : TwoDimensionalShape("Circle"), radius(center.distanceTo(circumferencePoint)) {}
    float findArea() {
        return 3.14 * radius * radius;
    }
    float findPerimeter() {
        return 2 * 3.14 * radius;
    }
    void display() {
        displayBase();
        cout << "Radius: " << radius
             << "\nArea: " << findArea()
             << "\nCircumference: " << findPerimeter() << endl;
    }
};

// Square Class
class Square : public TwoDimensionalShape {
    float side;
public:
    Square(const Point& p1, const Point& p2)
        : TwoDimensionalShape("Square"), side(p1.distanceTo(p2)) {}
    float findArea() {
        return side * side;
    }
    float findPerimeter() {
        return 4 * side;
    }
    void display() {
        displayBase();
        cout << "Side: " << side
             << "\nArea: " << findArea()
             << "\nPerimeter: " << findPerimeter() << endl;
    }
};

// Cube Class
class Cube : public ThreeDimensionalShape {
    float side;
public:
    Cube(const Point& p1, const Point& p2)
        : ThreeDimensionalShape("Cube"), side(p1.distanceTo(p2)) {}
    float findSurfaceArea() {
        return 6 * side * side;
    }
    float findVolume() {
        return pow(side, 3);
    }
    void display() {
        displayBase();
        cout << "Side: " << side
             << "\nSurface Area: " << findSurfaceArea()
             << "\nVolume: " << findVolume() << endl;
    }
};

// Tetrahedron Class
class Tetrahedron : public ThreeDimensionalShape {
    float edge;
public:
    Tetrahedron(const Point& p1, const Point& p2)
        : ThreeDimensionalShape("Tetrahedron"), edge(p1.distanceTo(p2)) {}
    float findSurfaceArea() {
        return sqrt(3) * edge * edge;
    }
    float findVolume() {
        return (pow(edge, 3) / (6 * sqrt(2)));
    }
    void display() {
        displayBase();
        cout << "Edge: " << edge
             << "\nSurface Area: " << findSurfaceArea()
             << "\nVolume: " << findVolume() << endl;
    }
};

// Main Function
int main() {
    Circle c(Point(0, 0), Point(0, 5));
    c.display();
    cout << endl;

    Square s(Point(0, 0), Point(0, 4));
    s.display();
    cout << endl;

    Cube cu(Point(0, 0, 0), Point(0, 4, 0));
    cu.display();
    cout << endl;

    Tetrahedron th(Point(0, 0, 0), Point(0, 3, 3));
    th.display();

    return 0;
}
